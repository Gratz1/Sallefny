const Review = require('../models/review');
const User = require('../models/user');
const Post = require('../models/post');
const { cloudinary } = require('../cloudinary');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapBoxToken });

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}
const middleware = {
asyncErrorHandler: (fn) => 
        (req, res, next) => {
        Promise.resolve(fn(req, res, next))
                .catch(next);
        },

isReviewAuthor: async (req, res, next) => {
		// console.log('in is review author');
		// console.log(req.body)
        let review = await Review.findById(req.params.review_id);
        if (review.author.equals(req.user._id)) {
                return next();
        }

        req.session.error = 'Bye Bye';
        return res.send('you are not the review author');
},
// CheckIfUserExists: async (req, res, next) => {
//         let userExists = await User.findOne({'email': req.body.email});
//         if(userExists) {
//                 req.session.error = 'A User with the given email is already registered';
//                 return res.redirect('back');
//         }
//         next();

// }
isLoggedIn: (req, res, next) => {
		// console.log('hello');
		// console.log(req);
		// console.log(res)

		// console.log(req);
		

        if(req.isAuthenticated()) {
			console.log('yes ur authenticated');
			return next();
		}
        req.session.error = 'You need to be logged in to do that!';
        // req.session.redirectTo = req.originalUrl;
        // res.send(req.session.error);
		// res.status(401).send({message: 'you need to be logged in first'});
		// res.status(401).json({message: 'you need to be logged in first'});
		// res.status(401);
		// return next(new Error('you need to be logged in'));
		// return res.status(401).send(new Error('you need to login first'));
		// res.send(error);

		// return res.send(new Error('you need to login first'));
		
		// throw { 'message': 'please login first!', status: 401 }
		console.log("you need to be logged in");
		res.status(401).send('you need to login first');
		//  return
		// res.status(500).send({ error: 'Something failed!' })
		// error = new Error({ status: 401, message: 'unauthoried, log in first' });
		// console.log(error);
		// return next(error.message.status);
		// res.send('please login first', 401);
},
isAuthor: async (req, res, next) => {
        const post = await Post.findById(req.params.id);
        if (post.author.equals(req.user._id)) {
                res.locals.post = post;
                return next();
        }
		// res.status(401).send(new Error('you need to login first'));

        // req.session.error = 'Access denied!';
        // res.send(req.session.error);
		return res.status(403).send('Access denied!,  you are not the author of this post!');

},
isValidPassword: async (req, res, next) => {
        const { user } = await User.authenticate()(req.user.username, req.body.currentPassword)
        if(user) { 
                // add user to res.locals
                res.locals.user = user;
                // go to next middleware
                next();
        } else {
                middleware.deleteProfileImage(req);
                // flash an error
                req.session.error = 'Incorrect Current Password!';
                // short circuit the route middleware and redirect to /profile
                // return res.send(req.session.error);
				return res.status(403).send('Incorrect Current Password!');

        }
},
changePassword: async (req, res, next) => {
        // destructure new password values from req.body object
        const { 
                newPassword,
                passwordConfirmation
        } = req.body;

        // check if new password values exist
        if (newPassword && !passwordConfirmation) {
                middleware.deleteProfileImage(req);

                req.session.error = 'missing password confirmation';
                // return res.send(req.session.error);
				return res.status(403).send('missing password confirmation');

        }else if (newPassword && passwordConfirmation) {
                // destructure user from res.locals
                const { user } = res.locals;
                        // check if new passwords match
                        if (newPassword === passwordConfirmation) {
                                // set new password on user object
                                await user.setPassword(newPassword);
                                // go to next middleware
                                next();
                        } else {
                                middleware.deleteProfileImage(req);

                                // flash error
                                req.session.error = 'New passwords must match!';
                                // short circuit the route middleware and redirect to /profile
                                // return res.send(req.session.error);
								return res.status(403).send('New passwords must match');

                        }
        } else {
                // go to next middleware
                next();
        }
},
deleteProfileImage: async req => {
        if (req.file) await cloudinary.uploader.destroy(req.file.filename);
},
        // create a async middleware method named searchAndFilterPosts
async searchAndFilterPosts(req, res, next) {
	// pull keys from req.query (if there are any) and assign them 
	// to queryKeys variable as an array of string values
	const queryKeys = Object.keys(req.query);
	/* 
		check if queryKeys array has any values in it
		if true then we know that req.query has properties
		which means the user:
		a) clicked a paginate button (page number)
		b) submitted the search/filter form
		c) both a and b
	*/
	if (queryKeys.length) {
		// initialize an empty array to store our db queries (objects) in
		const dbQueries = [];
		// destructure all potential properties from req.query
		let { search, price, avgRating, location, distance  } = req.query;
		// check if search exists, if it does then we know that the user
		// submitted the search/filter form with a search query
		if (search) {
			// convert search to a regular expression and 
			// escape any special characters
			search = new RegExp(escapeRegExp(search), 'gi');
			// create a db query object and push it into the dbQueries array
			// now the database will know to search the title, description, and location
			// fields, using the search regular expression
			dbQueries.push({ $or: [
				{ title: search },
				{ description: search },
				{ location: search }
			]});
		}
		// check if location exists, if it does then we know that the user
		// submitted the search/filter form with a location query
		if (location) {
			let coordinates;
                        try {
                                if(typeof JSON.parse(location) === 'number') {
                                  throw new Error;
                                }
                                location = JSON.parse(location);
                                coordinates = location;
                              } catch(err) {
                                const response = await geocodingClient
                                  .forwardGeocode({
                                    query: location,
                                    limit: 1
                                  })
                                  .send();
                                coordinates = response.body.features[0].geometry.coordinates;
                              }
                
			// get the max distance or set it to 25 mi
			let maxDistance = distance || 25;
			// we need to convert the distance to meters, one mile is approximately 1609.34 meters
			maxDistance *= 1609.34;
			// create a db query object for proximity searching via location (geometry)
			// and push it into the dbQueries array
			dbQueries.push({
			  geometry: {
			    $near: {
			      $geometry: {
			        type: 'Point',
			        coordinates
			      },
			      $maxDistance: maxDistance
			    }
			  }
			});
		}
		// check if price exists, if it does then we know that the user
		// submitted the search/filter form with a price query (min, max, or both)
		if (price) {
			/*
				check individual min/max values and create a db query object for each
				then push the object into the dbQueries array
				min will search for all post documents with price
				greater than or equal to ($gte) the min value
				max will search for all post documents with price
				less than or equal to ($lte) the min value
			*/
			if (price.min) dbQueries.push({ price: { $gte: price.min } });
			if (price.max) dbQueries.push({ price: { $lte: price.max } });
                        console.log(price.min)
                        console.log(price.max)
		}
		// check if avgRating exists, if it does then we know that the user
		// submitted the search/filter form with a avgRating query (0 - 5 stars)
		if (avgRating) {
			// create a db query object that finds any post documents where the avgRating
			// value is included in the avgRating array (e.g., [0, 1, 2, 3, 4, 5])
			dbQueries.push({ avgRating: { $in: avgRating } });
		}

		// pass database query to next middleware in route's middleware chain
		// which is the postIndex method from /controllers/postsController.js
		res.locals.dbQuery = dbQueries.length ? { $and: dbQueries } : {};
	}
	// pass req.query to the view as a local variable to be used in the searchAndFilter.ejs partial
	// this allows us to maintain the state of the searchAndFilter form
	res.locals.query = req.query;

	// build the paginateUrl for paginatePosts partial
	// first remove 'page' string value from queryKeys array, if it exists
	queryKeys.splice(queryKeys.indexOf('page'), 1);
	/*
		now check if queryKeys has any other values, if it does then we know the user submitted the search/filter form
		if it doesn't then they are on /posts or a specific page from /posts, e.g., /posts?page=2
		we assign the delimiter based on whether or not the user submitted the search/filter form
		e.g., if they submitted the search/filter form then we want page=N to come at the end of the query string
		e.g., /posts?search=surfboard&page=N
		but if they didn't submit the search/filter form then we want it to be the first (and only) value in the query string,
		which would mean it needs a ? delimiter/prefix
		e.g., /posts?page=N
		*N represents a whole number greater than 0, e.g., 1
	*/
	const delimiter = queryKeys.length ? '&' : '?';
	// build the paginateUrl local variable to be used in the paginatePosts.ejs partial
	// do this by taking the originalUrl and replacing any match of ?page=N or &page=N with an empty string
	// then append the proper delimiter and page= to the end
	// the actual page number gets assigned in the paginatePosts.ejs partial
	res.locals.paginateUrl = req.originalUrl.replace(/(\?|\&)page=\d+/g, '') + `${delimiter}page=`;
	// move to the next middleware (postIndex method)
	next();
}
    
};

module.exports = middleware;