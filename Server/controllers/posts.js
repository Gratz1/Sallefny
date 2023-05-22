const Post = require('../models/post');
const User = require('../models/user');
const {app} = require('../app');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapBoxToken });
const { cloudinary } = require('../cloudinary');

module.exports = {

    //get post index from database
    async postIndex(req, res, next) {
        // const { dbQuery } = res.locals;
        // delete res.locals.dbQuery;
        // let posts = await Post.paginate(dbQuery, {
        //     page: req.query.page || 1,
        //     limit: 10,
        //     sort: '-_id'
        // });
        // posts.page = Number(posts.page);
        // if (!posts.docs.length && res.locals.query) {
        //     		res.locals.error = 'No results match that query.';
        //     	}
        // res.send({ posts, mapBoxToken: mapBoxToken ,title: 'Posts Index' });
        let posts = await Post.find({});
        res.send(posts);

    },




        //get post filtered by category and sub category from database
        async getFilterCat(req, res, next) {
            console.log(req.body);
            // console.log(req.body.post.length);
            // if (req.body.post.hasOwnProperty("category")) {

            //     console.log("enter true");
            // }
            if ( req.body.post && req.body.post.hasOwnProperty("category") && req.body.post.hasOwnProperty("sub_category")) {
                
                let category = req.body.post.category;
                let sub_category = req.body.post.sub_category;
                // console.log(category);
                // console.log(sub_category);
                let posts = await Post.find({
                    category: category,
                    sub_category: sub_category,
                });
                // console.log(posts)
                res.send(posts);
            } else if ( req.body.post && req.body.post.hasOwnProperty("category")) {
                    
                let category = req.body.post.category;
                // console.log(category);
                // console.log(sub_category);
                let posts = await Post.find({
                    category: category,
                });
                // console.log(posts)
                res.send(posts);
            } else {
                let posts = await Post.find({
                });
                res.send(posts);
            }
            
        },


    async rentPost(req, res, next) {
        // console.log(req.body);
        // console.log(req.user);
        // console.log("user id is " + req.user._id);
        let post = await Post.findById(req.body.postId);

        const thebuyer = await User.findById(req.user._id);
        const therenter = await User.findById(post.author);
        // console.log(therenter);

        if (post.rented) {
            return res.status(409).send("items is already rented");
        }
        post.rent_info.start_date = req.body.startDate;
        post.rent_info.end_date = req.body.endDate;
        post.rent_info.number_of_days_rented = req.body.NumOfDays;
        // posts.rented = true;
        // console.log(posts);
        await post.save();
        var message = thebuyer.first_name + ' ' + thebuyer.last_name + ' ' + "wants to rent item";
        
        therenter.notifications.push({theBuyer: req.user._id, thePost: post._id, theMessage: message});
        
        await therenter.save();
        res.send("a message was sent to " + therenter.first_name + ' ' + therenter.last_name);
    },

    async acceptRefuseRentPost(req, res, next) {
        //the logged in user
        //the buyer//
        //the postid//
        var user = await User.findById(req.user._id);
        var x = user.notifications.find(notf => notf._id == req.body.notfid);
        var post = await Post.findById(x.thePost);
        if (req.body.choice == "accept") {
            // console.log(x);
            post.rent_info.theBuyer = x.theBuyer;
            post.rented = true;
            await post.save();
            user.notifications.pull(req.body.notfid);
            await user.save();
            // console.log(post);
            res.send("accepted");
        } else if (req.body.choice == "refuse") {
            user.notifications.pull(req.body.notfid);
            await user.save();
            res.send("refused");

        }
    },

    async addFav(req, res, next) {
        // io.on('connection', socket => {
        //     console.log("connected!");
        //     io.emit('productRented');
          
        //     socket.on('disconnect', async () => {
        //         console.log('User Disconnected');
        //     });
        //   });

          
        // console.log(req.body);
        console.log("add fav");
        // res.send("welcome to addFav");
        const user = await User.findById(req.user._id);
        // console.log(user);
        // console.log(user);
        


        if(user.favourties.includes(req.body.postId)) {
            user.favourties.pull(req.body.postId);
            user.save();
            return res.status(200).send('removed from fav');
        }


        user.favourties.push(req.body.postId);
        await user.save();
        res.status(200).send('added to fav');


    },

    async removeFav(req, res, next) {
        console.log(req.body);
        // res.send("welcome to addFav");
        const user = await User.findById(req.user._id);
        // console.log(user);
        console.log(user);
        


        if(!user.favourties.includes(req.body.postId)) {
            user.favourties.push(req.body.postId);
            await user.save();


            return res.status(200).send('added to fav');
        }
        // for (var i = user.favourties.length; i--;) {
        //     if (user.favourties[i] === req.body.postId) user.favourties.splice(i, 1);
        //   }
        // user.favourties.

        // await user.save();
        // User.updateOne( {_id: req.user._id}, { $pull: {favourties: req.body.postId } } );
        user.favourties.pull(req.body.postId);
        user.save();
        res.status(200).send('removed from fav');

    },


    async getFavs(req, res, next) {
        const user = await User.findById(req.user._id).populate('favourties').exec();
        res.send(user.favourties);
    },

    //creating a new post
    postNew(req, res, next) {
        
        res.send('posts/new');
    },

    //Posts Create
    async postCreate(req, res, next) {
        
        console.log('hello');
        console.log(req.body.post);
        console.log(req.files);

        try {
            req.body.post.images = [];
            req.body.post.price = {};
            if (!req.files) {
                req.files = [];
            }
        }catch(err) {
            return res.status(400).send('undefined');
        }

        for(const file of req.files) {
            req.body.post.images.push({
                path: file.path,
                filename: file.filename
            });

        }
        let response = await geocodingClient.forwardGeocode({
            query: req.body.post.location,
            limit: 1,
          })
            .send();
        req.body.post.geometry = response.body.features[0].geometry;
        req.body.post.author = req.user._id;
        //use req.body to create a new Post
        // let post = await Post.create(req.body.post)
        price = {
            per_day: req.body.post.per_day,
            per_week: req.body.post.per_week,
            per_month: req.body.post.per_month,
        };
        req.body.post.price = price

        let post = new Post(req.body.post);
		// post.properties.description = `<strong><a href="/posts/${post._id}">${post.title}</a></strong><p>${post.location}</p><p>${post.description.substring(0, 20)}...</p>`;
		await post.save();

        res.send(post);

    },

    //Posts Show
    async postShow(req, res, next) {
        let post = await Post.findById(req.params.id).populate('author').exec();
        	// const floorRating = post.calculateAvgRating();
	        // const floorRating = post.avgRating;
        // res.send({ post, floorRating });
        res.send(post);

    },

    //Posts Edit    

    postEdit(req, res, next) {
        
        res.send('posts/edit');

    },

    // Posts Update
    async postUpdateImageNew(req, res, next) {
        req.body.post.price = {};

        const { post } = res.locals;
        if (req.body.deleteImages && req.body.deleteImages.length) {
            let deleteImages = req.body.deleteImages;
            for (const filename of deleteImages) {
                await cloudinary.uploader.destroy(filename);
                for (const image of post.images) {
                    if (image.filename === filename) {
                        let index = post.images.indexOf(image);
                        post.images.splice(index, 1);
                    }
                }
            }
        }
        if (req.files) {
            for(const file of req.files) {
                post.images.push({
                    path: file.path,
                    filename: file.filename
                });
    
            }
        }

        // check if location was updated
        if (req.body.post.location !== post.location) {
            let response = await geocodingClient.forwardGeocode({
                query: req.body.post.location,
                limit: 1,
              })
                .send();
                post.geometry = response.body.features[0].geometry;
                post.location = req.body.post.location;
        }

        price = {
            per_day: req.body.post.per_day,
            per_week: req.body.post.per_week,
            per_month: req.body.post.per_month,
        };

        post.item_name = req.body.post.item_name
        post.description = req.body.post.description
        post.category = req.body.post.category
        post.price = price;
        post.current_number = req.body.post.current_number
        post.prefered_way_to_contact = req.body.post.prefered_way_to_contact
        post.additonal = req.body.post.additonal
		// post.properties.description = `<strong><a href="/posts/${post._id}">${post.title}</a></strong><p>${post.location}</p><p>${post.description.substring(0, 20)}...</p>`;

        await post.save();
        res.send(post);

    },
    



        // Posts Update
        async postUpdate(req, res, next) {
            req.body.post.price = {};
    
            const { post } = res.locals;
            if (req.body.deleteImages && req.body.deleteImages.length) {
                let deleteImages = req.body.deleteImages;
                for (const filename of deleteImages) {
                    await cloudinary.uploader.destroy(filename);
                    for (const image of post.images) {
                        if (image.filename === filename) {
                            let index = post.images.indexOf(image);
                            post.images.splice(index, 1);
                        }
                    }
                }
            }
            if (req.files) {
                for(const file of req.files) {
                    post.images.push({
                        path: file.path,
                        filename: file.filename
                    });
        
                }
            }
    
            // check if location was updated
            if (req.body.post.location !== post.location) {
                let response = await geocodingClient.forwardGeocode({
                    query: req.body.post.location,
                    limit: 1,
                  })
                    .send();
                    post.geometry = response.body.features[0].geometry;
                    post.location = req.body.post.location;
            }
    
            price = {
                per_day: req.body.post.per_day,
                per_week: req.body.post.per_week,
                per_month: req.body.post.per_month,
            };
    
            post.item_name = req.body.post.item_name
            post.description = req.body.post.description
            post.category = req.body.post.category
            post.price = price;
            post.current_number = req.body.post.current_number
            post.prefered_way_to_contact = req.body.post.prefered_way_to_contact
            post.additonal = req.body.post.additonal
            // post.properties.description = `<strong><a href="/posts/${post._id}">${post.title}</a></strong><p>${post.location}</p><p>${post.description.substring(0, 20)}...</p>`;
    
            await post.save();
            res.send(post);
    
        },






    async postDestroy(req, res, next) {
        const { post } = res.locals;
        for (const image of post.images) {
            await cloudinary.uploader.destroy(image.filename);
            
        }
        // await post.deleteOne();
        await post.remove();
        req.session.success = 'Post deleted successfully!';
        res.send(req.session.success);
    }
}