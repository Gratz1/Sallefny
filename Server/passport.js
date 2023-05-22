// passport.use(new facebookStrategy({

//     // pull in our app id and secret from our auth.js file
//     clientID        : "488755738982896",
//     clientSecret    : "5b8631b38223d705902e51629fde85fd",
//     callbackURL     : "http://localhost:3000/facebook/callback",
//     profileFields   : ['id','displayName','name','picture.type(large)','email']
  
//   },// facebook will send back the token and profile
//   async function(token, refreshToken, profile, done) {
//     let user = await User.findOne({'uid': profile.id});
//     //if there is an error stop everything and return that error
//     // if (err) return done(err);
//     // if user if found log in them
//     if (user) {
//       console.log("user found");
//       console.log("user");
//       return done(null, user); // user found, return that user
//     }else {
//       // if there is no user found with that facebook id, create them
//       let newUser = new User();
//       // set all of the facebook information in our user model
//       newUser.uid    = profile.id; // set the users facebook id                   
//       newUser.token = token; // we will save the token that facebook provides to the user                    
//       newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//       newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
//       newUser.gender = profile.gender;
//       newUser.pic = profile.photos[0].value;
//       newUser.national_id = 213213222222222123;
//       // save our user to the database
//       await newUser.save();
//       return done(null, newUser);
//     }
  
//     // console.log(profile)
//     // return done(null,profile)
//   }));
  