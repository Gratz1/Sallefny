const FacebookStrategy = require('passport-facebook').Strategy;
// const User = require('../models/User');

passport.use(new FacebookStrategy({

    // pull in our app id and secret from our auth.js file
    clientID        : "352288419624141",
    clientSecret    : "c0c85de22221f64c6ff456907a61fe62",
    callbackURL     : "http://localhost:3000/facebook/callback",
    
    profileFields   : ['id','displayName','name','picture.type(large)','email']
  
  },// facebook will send back the token and profile
  async function(token, refreshToken, profile, done) {
      try{
          console.log(token)
          console.log(refreshToken)
          console.log(profile)
          console.log(profile.photos[0].value);
        let user = await User.findOne({'uid': profile.id});
        //if there is an error stop everything and return that error
        // if (err) return done(err);
        // if user if found log in them
        if (user) {
          console.log("user found");
          console.log("user");
          
          return done(null, user); // user found, return that user
        }else {
          // if there is no user found with that facebook id, create them
          let newUser = new User();
          // set all of the facebook information in our user model
          newUser.uid    = profile.id; // set the users facebook id                   
          newUser.token = token; // we will save the token that facebook provides to the user                    
          // newUser.username  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
          newUser.first_name  = profile.name.givenName; // look at the passport user profile to see how names are returned
          newUser.last_name  =  profile.name.familyName;
          newUser.image.path = profile.photos[0].value;
           // look at the passport user profile to see how names are returned
          if (profile.emails) {
          newUser.email = profile.emails[0].value;
          newUser.username = profile.emails[0].value;
          newUser.phone_number = '01134551926'
          }
          else newUser.email = profile.id;
        //   newUser.gender = profile.gender;
          newUser.national_id = profile.id;
          // save our user to the database
          await newUser.save();
          return done(null, newUser);
        }
      
        // console.log(profile)
        // return done(null,profile)
      }catch(err) {
        console.log(err);
        return done(err);
      }
    
  }));
  
// passport.use(new facebookStrategy({

//     // pull in our app id and secret from our auth.js file
//     clientID        : "488755738982896",
//     clientSecret    : "5b8631b38223d705902e51629fde85fd",
//     callbackURL     : "http://localhost:3000/facebook/callback",
//     profileFields: ['id', 'displayName', 'name', 'gender', 'picture.type(large)','email']

// },// facebook will send back the token and profile
// function(token, refreshToken, profile, done) {

//     // asynchronous
//     process.nextTick(function() {

//         // find the user in the database based on their facebook id
//         User.findOne({ 'uid' : profile.id }, function(err, user) {

//             // if there is an error, stop everything and return that
//             // ie an error connecting to the database
//             if (err)
//                 return done(err);

//             // if the user is found, then log them in
//             if (user) {
//                 console.log("user found")
//                 console.log(user)
//                 return done(null, user); // user found, return that user
//             } else {
//                 // if there is no user found with that facebook id, create them
//                 var newUser = new User();
//                 console.log('enter same as the above');
//                 // set all of the facebook information in our user model
//                 newUser.uid    = profile.id; // set the users facebook id                   
//                 newUser.token = token; // we will save the token that facebook provides to the user                    
//                 newUser.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
//                 newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first
//                 newUser.gender = profile.gender
//                 newUser.image.path = profile.photos[0].value
//                 // save our user to the database
//                 newUser.save(function(err) {
//                     if (err)
//                         throw err;

//                     // if successful, return the new user
//                     return done(null, newUser);
//                 });
//             }

//         });

//     })

// }));
