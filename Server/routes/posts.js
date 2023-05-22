const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({'dest': 'uploads/'});
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const {
    	asyncErrorHandler,
    	isLoggedIn,
    	isAuthor,
    	searchAndFilterPosts
    } = require('../middleware');
const { 
    postIndex, 
    postNew, 
    postCreate,
    postShow,
    postEdit,
    postUpdate,
    postDestroy,
    getFilterCat,
    addFav,
    removeFav,
    getFavs,
    rentPost,
    acceptRefuseRentPost
} = require('../controllers/posts');

/* GET posts index /posts */
router.get(
    	'/',
    	asyncErrorHandler(searchAndFilterPosts),
    	asyncErrorHandler(postIndex)
    );

/* GET posts new /posts/new */
router.get('/new', isLoggedIn, (postNew));







/* GET filterCategories  /posts/filtercat */
router.post('/filtercat', asyncErrorHandler(getFilterCat));

router.post('/addfav', isLoggedIn, asyncErrorHandler(addFav));
router.post('/removefav', isLoggedIn, asyncErrorHandler(removeFav));
router.get('/getFavs', isLoggedIn, asyncErrorHandler(getFavs));

router.post('/rentPost', isLoggedIn, asyncErrorHandler(rentPost));

router.post('/acceptRefuseRentPost', isLoggedIn, asyncErrorHandler(acceptRefuseRentPost));






/* POST posts create /posts */
router.post('/', isLoggedIn, upload.array('images', 20), asyncErrorHandler(postCreate)); //we use asyncErrorHandler because it's an async function

/* GET posts show /posts/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET posts edit /posts/:id/edit */
router.get('/:id/edit', isLoggedIn, asyncErrorHandler(isAuthor), postEdit);

/* PUT posts update /posts/:id/ */
router.put('/:id', isLoggedIn, asyncErrorHandler(isAuthor), upload.array('images', 20), asyncErrorHandler(postUpdate));

/* DELETE posts destory /posts/:id */
router.delete('/:id', isLoggedIn, asyncErrorHandler(isAuthor), asyncErrorHandler(postDestroy));
  
module.exports = router;
  
  