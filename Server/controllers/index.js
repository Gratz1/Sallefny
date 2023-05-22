const User = require('../models/user');
const Post = require('../models/post');
const passport = require('passport');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const util = require('util');
const { cloudinary } = require('../cloudinary');
const { deleteProfileImage } = require('../middleware');
const crypto = require('crypto');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);



module.exports = {
    async search(req, res, next) {
        console.log(req.body);
        // Post.createIndex( { item_name: "text", description: "text" } );
        if (req.user) {
            req.user.searches.push(req.body.query);
        }
        var posts = await Post.find({ $text: { $search: req.body.query } });
        res.send(posts);
    },
    async userPopulate(req, res, next) {
        // var user = await User.findById(req.user._id).populate('theBuyer').exec();
        // var user = await User.findById(req.user._id).populate('notifications.0.theBuyer').populate('notifications.0.thePost');
        var user = await User.findById(req.user._id).populate({path: 'notifications', populate: { path: 'theBuyer' }}).populate({path: 'notifications', populate: { path: 'thePost' }});
        // await user.populate('notifications.0.theMessage');
        // user.save();
        // await user.notifications[0].populate('theBuyer');
        // await user.populate("notifications.0.theBuyer");
        console.log(user);
        res.send(user);
    },
    // GET / 
    async landingPage(req, res, next) {
        const posts = await Post.find({});
        res.status(200).send({ posts, mapBoxToken, title: 'Salefny - Home'});
    },
    // GET /register
    getRegister(req, res, next) {
        res.send({ title: 'Register', username: '', email: '' });
    },
    //POST /register
    async postRegister(req, res, next) {
        console.log('registering user');
        // console.log(req.body);
        if (req.file) {
            console.log("we got the file");
        }
        try {
            if (req.file) {
                const { path, filename } = req.file;
                // console.log(path);
                // console.log(req.file);

                req.body.national_id_image = {
                    path: path, filename: filename
                };
                // console.log(req.body.image);
            }
            // try {
            //     const user = await User.register(new User(req.body), req.body.password);
                
            // } catch (error) {
            //     console.log(error);
            //     return res.status(409).send(error.message);

            // }

            
            const user = await User.register(new User(req.body), req.body.password);
            var id = user._id;
            // console.log(user._id);
            req.login(user, function(err) {
                if (err) {
                    res.send(err);
                    return next(err);
                }
                req.session.success = `Welcome, ${user.username}!`;
                // res.send(req.session.success);
                delete user._doc.salt;
                delete user._doc.hash;
                res.send(user);
    
            });
        }catch(err) {
            deleteProfileImage(req);
            const { username, email } = req.body;
            let error = err.message;
            if (error.includes('duplicate') && error.includes('index: email_1 dup key')) {
                error = 'A user with the given email is already registered';
            }
            if (error.includes('duplicate') && error.includes('national_id_1 dup key')) {
                error = 'A user with the given national id is already registered';
            }
            // res.send({ title: 'Register', username, email, error });
            res.status(409).send(error);
        }

        const confUser = await User.findById(id)
        // send email to confirm email
        const token = await crypto.randomBytes(20).toString('hex');
    
        confUser.confirmToken = token;
        confUser.confirmExpires = Date.now() + 36000000; 
    
      await confUser.save();
      
    
      const msg = {
        to: confUser.username,
        from: 'salefnyrent@gmail.com',
        subject: 'Salefny - confirm email',
        text: `You are receiving this because you (or someone else) have used this email to register.
                Please click on the following link, or copy and paste it into your browser to complete the process:
                http://localhost:8080/#/confirmEmail?token=${token}
                If you did not request this, please ignore this email.`.replace(/				/g, ''),
      };
    
      await sgMail.send(msg);
    

        
    },
    async confirmEmail(req, res, next) {
        const { token } = req.params;
        console.log(token);
        const user = await User.findOne({ confirmToken: token, confirmExpires: { $gt: Date.now() } });
        
        if (!user) {
         return res.status(401).send('email token expired or already used');
        }
    
            user.confirmToken = null;
            user.confirmExpires = null;
            user.verified = true;
            await user.save();
            const login = util.promisify(req.login.bind(req));
            await login(user);
    
      const msg = {
        to: user.username,
        from: 'salefnyrent@gmail.com',
        subject: 'Salefny - Email Confirmed!',
        text: `Hello,
              This email has been confirmed!.`.replace(/		  	/g, '')
      };
      
      await sgMail.send(msg);
    
      res.status(200).send("confirmed email");

    },
    // GET /login
    getLogin(req, res, next) {
        if (req.isAuthenticated()) return res.send('user is already logged in');
        // if (req.query.returnTo) req.session.redirectTo = req.headers.referer;
        res.status(200).send({ title: 'login' });
    },
    //POST /login
    async postLogin(req, res, next) {

        console.log('helo');
        console.log("Login");
        console.log(req.body);
        
        const { username, password } = req.body;
        const { user, error } = await User.authenticate()(username, password);
        if (!user && error) {
            return res.status(403).send(error.message);
            

        }
        req.login(user, function(err) {
            if (err) return res.status(403).send(err.message);
            req.session.success = `Welcome back, ${username}!`;
            // const redirectUrl = req.session.redirectTo || '/';
            // delete req.session.redirectTo;
            // let userToClient = req.user.image;
            // var copy = Object.assign({}, req.user);
            var copy = req.user
            // delete userTOClient;
            // delete copy.salt;
            delete copy._doc.salt;
            delete copy._doc.hash;
            // console.log(copy);
            // res.send({message: req.session.success, session: req.sessionID, user: copy });
            res.send(copy);
            // console.log(req.sessionID);
            console.log(req.sessionStore.sessions);
            // console.log(req.user);
        });
    },
    async addNotf(req, res, next) {
        // // console.log(req.body);
        // const user = await User.findById(req.user._id);
        // user.notifications.push(req.body.message);
        // // user.email = "dwaidjwa@gmail.com";
        // user.save();
        // res.send(user);
        console.log("enter addNotf");
        let post = await Post.findById('60ed4711c901192d2067d9fe');

        const thebuyer = await User.findById(req.user._id);
        const therenter = await User.findById(post.author);
        
        if (post.rented) {
            return res.status(409).send("items is already rented");
        }
        // posts.rent_info.start_date = req.body.startDate;
        // posts.rent_info.end_date = req.body.endDate;
        // posts.rent_info.number_of_days_rented = req.body.NumOfDays;
        // posts.rented = true;
        // console.log(posts);
        // posts.save();
        var message = thebuyer.first_name + ' ' + therenter.last_name + ' ' + "wants to rent item";
        // therenter.notifications.push({message: thebuyer.first_name + ' ' + therenter.last_name + ' ' + "has rented item", From: therenter._id + ''});
        therenter.notifications.push({theBuyer: req.user._id, thePost: post._id, theMessage: message});
        await therenter.save();
        res.send(post);
    },

    // GET /logout
    getLogout(req, res, next) {

            req.logout();
            res.send('logged out');
    },

    async getProfile(req, res, next) {
        // const posts = await Post.find().where('author').equals(req.user._id).limit(10).exec();
        // const posts = await Post.find({}).where('author').equals(req.user._id).exec();
        const posts = await Post.find({author: req.user._id}).where('author').equals(req.user._id).exec();
        res.send( posts );
    },
    async updateProfile(req, res, next) {
		// destructure username and email from req.body
        if (req.file) {
            console.log("we got the file");

        } else{
            console.log("we didn't get the file")
        }
        if (req.files) {
            console.log("we got files");
            console.log(req.files);
        }
		const {
			username,
			first_name,
            last_name,
            id,
            phone_number,
            newPassword,
            passwordConfirmation,
            currentPassword
		} = req.body;
        console.log("--------------------------======================");
        console.log("--------------------------======================");
        // console.log(res.locals);
        if (newPassword && passwordConfirmation && currentPassword)
        {
            const { user } = await User.authenticate()(req.user.username, currentPassword)
            if(user) { 
                    res.locals.user = user;
            } else {
                    return res.status(403).send('Incorrect Current Password!');
            }
                    // check if new password values exist
            if (newPassword && !passwordConfirmation) {
                return res.status(403).send('missing password confirmation');
    
        }else if (newPassword && passwordConfirmation) {
                // destructure user from res.locals
                const { user } = res.locals;
                        // check if new passwords match
                        if (newPassword === passwordConfirmation) {
                                // set new password on user object
                                await user.setPassword(newPassword);
                                await user.save();
                                return res.send("password changed successfully");
                        } else {
                                return res.status(403).send('New passwords must match');
    
                        }
        }
        }
        


		// destructure user object from res.locals
		const { currentUser } = res.locals;
		// check if username or email need to be updated
		if (username) currentUser.username = username;
		if (first_name) currentUser.first_name = first_name;
		if (last_name) currentUser.last_name = last_name;
		if (id) currentUser.id = id;
		if (phone_number) currentUser.phone_number = phone_number;
        if (req.file) {
            if (currentUser.image.filename) await cloudinary.uploader.destroy(currentUser.image.filename);
            const { path, filename } = req.file;
            currentUser.image = { path, filename };
        }
		// save the updated user to the database
		await currentUser.save();
		// promsify req.login
		const login = util.promisify(req.login.bind(req));
		// log the user back in with new info
		await login(currentUser);
		// redirect to /profile with a success flash message
		// req.session.success = 'Profile successfully updated!';
		res.send(currentUser);
	},
    async changepassword(req, res, next) {
         // destructure new password values from req.body object
         console.log("==========================================");
         console.log("password change");
         console.log(req.body);
         const { 
            newPassword,
            passwordConfirmation,
    } = req.body;

        const { user } = await User.authenticate()(req.user.username, req.body.currentPassword)
        if(user) { 
                res.locals.user = user;
        } else {
				return res.status(403).send('Incorrect Current Password!');
        }


    // check if new password values exist
    if (newPassword && !passwordConfirmation) {
            return res.status(403).send('missing password confirmation');

    }else if (newPassword && passwordConfirmation) {
            // destructure user from res.locals
            const { user } = res.locals;
                    // check if new passwords match
                    if (newPassword === passwordConfirmation) {
                            // set new password on user object
                            await user.setPassword(newPassword);
                            res.send("password changed successfully");
                    } else {
                            return res.status(403).send('New passwords must match');

                    }
    }
    },
    getForgotPw(req, res, next) {
        res.send('users/forgot');
    },
    async putForgotPw(req, res, next) {
        const token = await crypto.randomBytes(20).toString('hex');
        // if (!req.body.email) {
        //     return res.send('you need to have added email for the account first');
        // }
        console.log(req.body);
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            // req.session.error = 'No account with that email address exists.';
        //   return res.send('No account with that email address exists.');
            return res.status(403).send('No account with that email address exists.');
            
        }
    
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    
      await user.save();
      
    
      const msg = {
        to: user.username,
        from: 'salefnyrent@gmail.com',
        subject: 'Salefny - Forgot Password / Reset',
        text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.
                Please click on the following link, or copy and paste it into your browser to complete the process:
                http://localhost:8080/#/profile/signin/getreset?token=${token}
                If you did not request this, please ignore this email and your password will remain unchanged.`.replace(/				/g, ''),
      };
    
      await sgMail.send(msg);
    
    //   req.session.success = `An e-mail has been sent to ${user.email} with further instructions.`;
      res.send(`An e-mail has been sent to ${user.username} with further instructions.`);
    },
    async getReset(req, res, next) {
      const { token } = req.params;
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } })
      if (!user) {
        req.session.error = 'Password reset token is invalid or has expired.';
        return res.status(400).send({
            message: 'Password reset token is invalid or has expired.'
         });
      }
    //   res.render('/');
      res.redirect('../views/users/reset', { token });
    },
    async putReset(req, res, next) {
        const { token } = req.params;
        console.log(token);
        const user = await User.findOne({ resetPasswordToken: token, resetPasswordExpires: { $gt: Date.now() } });
        
        if (!user) {
         req.session.error = 'Password reset token is invalid or has expired.';
         return res.status(401).send('Password reset token is invalid or has expired.');
        }
    
        if(req.body.password === req.body.confirm) {
            await user.setPassword(req.body.password);
            user.resetPasswordToken = null;
            user.resetPasswordExpires = null;
            await user.save();
            const login = util.promisify(req.login.bind(req));
            await login(user);
        } else {
            req.session.error = 'Passwords do not match.';
            // return res.redirect(`/reset/${ token }`);
            return res.status(403).send('Passwords do not match.');
        }
    
      const msg = {
        to: user.username,
        from: 'salefnyrent@gmail.com',
        subject: 'Salefny - Password Changed',
        text: `Hello,
              This email is to confirm that the password for your account has just been changed.
              If you did not make this change, please hit reply and notify us at once.`.replace(/		  	/g, '')
      };
      
      await sgMail.send(msg);
    
      req.session.success = 'Password successfully updated!';
      res.send(req.session.success);
    }
}

