const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
var passportFacebook = require('../auth/facebook');
var passportGoogle = require('../auth/google');
const { 
  getRegister,
  postRegister, 
  getLogin,
  postLogin, 
  getLogout, 
  landingPage,
  getProfile,
  updateProfile,
  getForgotPw,
  putForgotPw,
  getReset,
  putReset,
  changepassword,
  addNotf,
  confirmEmail,
  userPopulate,
  search

} = require('../controllers');

const { 
  asyncErrorHandler, 
  isLoggedIn,
  isValidPassword,
  changePassword,

} = require('../middleware');

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Please Sign In with:' });
});




/* FACEBOOK ROUTER */

router.get('/auth/facebook',
passport.authenticate('facebook', { scope : 'email,user_photos' }));

router.get('/facebook/callback',
passport.authenticate('facebook', { failureRedirect: 'http://localhost:8080/#/' }),
function(req, res) {
  // Successful authentication, redirect home.
  // console.log(req.user)
  // res.send('success login using facebook and this is the call');
  res.redirect('http://localhost:8080/#/profile');
});



/* GOOGLE ROUTER */
router.get('/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'https://www.googleapis.com/auth/userinfo.profile','https://www.googleapis.com/auth/userinfo.email'] }));

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: 'http://localhost:8080/#/' }),
  function(req, res) {
    // console.log(req)
    console.log(req.user);
    // res.send('success login using google and this is the callback');
    res.redirect('http://localhost:8080/#/profile');
  });


/* GET home/landing page. */
// router.get('/', asyncErrorHandler(landingPage));

/* GET /register. */
router.get('/register', getRegister);
/* POST /register. */
//this is for creating the user.

router.post('/register', upload.single('national_id_image'), asyncErrorHandler(postRegister));
router.put('/confirm/:token', asyncErrorHandler(confirmEmail));

router.get('/user', isLoggedIn, (req, res, next) => {
  res.send(req.user);
});


router.get('/userPopulate', isLoggedIn, asyncErrorHandler(userPopulate));
router.post('/search', asyncErrorHandler(search));
/* get /login. */
router.get('/login', getLogin);

// /* POST /login. */
// router.post('/login', passport.authenticate('local'), (req, res, next) => {
//   res.send("post /login");
// });
router.post('/login', asyncErrorHandler(postLogin));
router.post('/addNotf', isLoggedIn,asyncErrorHandler(addNotf));
/* GET /profile */

/* get /logout. */
router.get('/logout', isLoggedIn, getLogout);

router.get('/profile', isLoggedIn, asyncErrorHandler(getProfile));

//so that you can update the user info which you got from the login
//so the profile will get this data and then you will be able to update this information
/* PUT /profile*/
router.put('/profile',
 isLoggedIn,
  upload.single('image'),
  // asyncErrorHandler(isValidPassword),
  // asyncErrorHandler(changePassword),
  asyncErrorHandler(updateProfile)

  );

  router.put('/changepassword',
  isLoggedIn,
   asyncErrorHandler(changepassword)
 
   );

/* GET /forgot */
router.get('/forgot-password', getForgotPw);

/* PUT /forgot */
router.put('/forgot-password', asyncErrorHandler(putForgotPw));

/* GET /reset/:token */
router.get('/reset/:token', asyncErrorHandler(getReset));
/* PUT /reset/:token */
router.put('/reset/:token', asyncErrorHandler(putReset));
module.exports = router;
