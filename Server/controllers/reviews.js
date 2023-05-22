const Post = require('../models/post');
const Review = require('../models/review');

module.exports = {
    //Reviews Create
    async reviewCreate(req, res, next) {
        console.log(req.body.review)
        console.log(req.body)
        // find the post by its id
        let post = await Post.findById(req.params.id).populate('reviews').exec();
        let haveReviewed = post.reviews.filter(review => {
            return review.author.equals(req.user._id);
        }).length;
        if(haveReviewed) {
            req.session.error = 'sorry, you can only create one review per post';
            // return res.send(`/posts/${post.id}`);
            return res.status(409).send('sorry, you can only create one review per post');
        }

        //create the review

        req.body.review.author = req.user._id;
        let review = await Review.create(req.body.review);

        // assign review to post
        post.reviews.push(review);
        // save the post
        post.save();
        // redirect to the post
        req.session.success = 'Review created successfully';
        res.send([`/posts/${post.id}`, req.session.success]);

      
    },
    // Reviews Update
    async reviewUpdate(req, res, next) {
        await Review.findByIdAndUpdate(req.params.review_id, req.body.review);
        req.session.success = 'Review updated successfully';
        res.send(`/posts/${req.params.id}`);
    },
    // Reviews destory
    async reviewDestroy(req, res, next) {
        await Post.findByIdAndUpdate(req.params.id, {
            $pull: { reviews: req.params.review_id }
        });
        await Review.findByIdAndRemove(req.params.review_id);
        req.session.success = 'Review deleted successfully';
        res.send(`/posts/${req.params.id}`);
    }   
}