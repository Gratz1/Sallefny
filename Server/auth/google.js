const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
// const User = require('../models/User');

passport.use(new GoogleStrategy({

    // pull in our app id and secret from our auth.js file
    clientID        : "909598380609-rn7vm6383ksboov8ls57bj6dap4km0mp.apps.googleusercontent.com",
    clientSecret    : "FOCcCEKC_-gGxkUPqMkX3ukX",
    callbackURL     : "http://localhost:3000/google/callback",
    // profileFields   : ['id','displayName','name','picture.type(large)','email']
  
  },// facebook will send back the token and profile
  async function(token, refreshToken, profile, done) {
      try{
        console.log("==========================================================================")
        console.log("==========================================================================")
        console.log("==========================================================================")
        console.log("==========================================================================")
          console.log(token)
          console.log(refreshToken)
          console.log(profile)
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
          newUser.image.path = profile.photos[0].value;
          newUser.first_name  = profile.name.givenName; // look at the passport user profile to see how names are returned
          newUser.last_name  =  profile.name.familyName;
          newUser.phone_number = "01034512676";
          if (profile.emails)
          {
            newUser.username  = profile.emails[0].value; // look at the passport user profile to see how names are returned
            newUser.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

          }
          else newUser.email = profile.id;

        //   newUser.gender = profile.gender;
          newUser.pic = profile.photos[0].value;
          newUser.national_id = profile.id;
          // save our user to the database
          await newUser.save();
          return done(null, newUser);
        }
      
        // console.log(profile)
        // return done(null,profile)
      }catch(err) {
        console.log(err);
      }
    
  }));
  

