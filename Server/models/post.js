const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');
const mongoosePaginate = require('mongoose-paginate');
const PostSchema = new Schema({
    item_name: String,
    description: String,
    category: String,
    payment_method: String,

    sub_category: String,
    case: String, 
    receive_method: String, 
    rented: {
        type: Boolean,
        default: false,
    },
    rent_info: {
        start_date: Date, 
        end_date: Date,
        number_of_days_rented: String,
        theBuyer: {  
             type: Schema.Types.ObjectId,
            ref: 'User',
        }
        
    },

    price: {
        per_day: String,
        per_week: String,
        per_month: String,
    },
    current_number: String,

    images: [ { path: String, filename: String } ],
    location: {type: String, default: 'egypt'},
    prefered_way_to_contact: String,
    additonal: String,

    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    properties: {
        description: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ],
    avgRating: {
        type: Number,
        default: 0,
    },
    rating: {
        type: Number,
        default: 0,
    }


});

PostSchema.pre('remove', async function() {
    console.log('deleteing review');
    await Review.remove({
        _id: {
            $in: this.reviews
        }
    });
});

// PostSchema.methods.calculateAvgRating = function() {
//     let ratingsTotal = 0;
//     if(this.reviews.length) {
//         this.reviews.forEach(review => {
//             ratingsTotal += review.rating;
//         });
//         this.avgRating = Math.round((ratingsTotal / this.reviews.length) * 10) / 10;

//     } else {
//         this.avgRating = ratingsTotal;
//     }
//     const floorRating = Math.floor(this.avgRating);
//     this.save();
//     return floorRating;
// }

PostSchema.plugin(mongoosePaginate);

PostSchema.index({ geometry: '2dsphere' });

module.exports = mongoose.model('Post', PostSchema);