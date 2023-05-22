const express = require('express');
const router = express.Router({ mergeParams: true });
const { asyncErrorHandler, isReviewAuthor, isLoggedIn } = require('../middleware');
const {
    reviewCreate, 
    reviewUpdate,
    reviewDestroy,

} = require('../controllers/reviews');



/* post reviews create /posts/:id/reviews */
router.post('/', isLoggedIn,asyncErrorHandler(reviewCreate));



/* PUT reviews update /posts/:id/reviews/:review_id/ */
router.put('/:review_id', isLoggedIn, isReviewAuthor, asyncErrorHandler(reviewUpdate));

/* DELETE reviews destory /posts/:id/reviews/:review_id */
router.delete('/:review_id', isLoggedIn, isReviewAuthor, asyncErrorHandler(reviewDestroy));
  
module.exports = router;
  
  