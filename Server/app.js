require('dotenv').config();

const createError = require('http-errors');
const express = require('express');

const engine = require('ejs-mate');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
passport = require('passport');
// const facebookStrategy = require('passport-facebook').Strategy
User = require('./models/user');
const session = require('express-session');
const logger = require('morgan');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require("cors");
// const MongoStore = require('connect-mongo');

// const { 
//   asyncErrorHandler, 
//   isLoggedIn,
//   isValidPassword,
//   changePassword,

// } = require('../middleware');

// const seedPost = require('./seeds');
// seedPost();
// const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://surf:surf@cluster0.hufxf.mongodb.net/salefny-v5?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// require routes
const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');
const app = express();

//socket io setup

const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: ["http://localhost:8080/#/profile/signin/forgetpassword" ,"https://www.facebook.com", "http://localhost:8080", "http://localhost:8080/", "http://localhost:8081"], methods: ["GET", "POST", "PUT", "DELETE"], credentials: true,
    transports: ['websocket', 'polling'],
    allowEIO3: true
  }

});







// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:8080/");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header('Access-Control-Allow-Credentials', true);
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   next();
// });
// app.use(cors({credentials: true, origin: ['http://localhost:8080',  'https://www.facebook.com/*', 'http://localhost:8080/#/profile/signin/forgetpassword']}));

// var whitelist = ['https://www.facebook.com', 'http://localhost:8080'];
// var corsOptions = {
  //   origin: function (origin, callback) {
    //     if (whitelist.indexOf(origin) !== -1) {
      //       callback(null, true)
      //     } else {
        //       callback(new Error('Not allowed by CORS'))
        //     }
        //   }
        // }
        // var corsOptions = {
          //   origin: function (origin, callback) {
            //     if (whitelist.indexOf(origin) !== -1 || !origin) {
              //       callback(null, true)
              //     } else {
                //       callback(new Error('Not allowed by CORS'))
                //     }
                //   }
                // }
                // app.use(cors(corsOptions));
                
//connect to the database
// mongoose.connect('mongodb+srv://<username>:<password>@cluster0.hufxf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
let changeStream;
mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',async () =>  {
  // db.collection('posts').createIndex( { item_name: "text", description: "text" } )
  console.log('we are connected!');
  const users = db.collection("users");
  changeStream = users.watch();
  // // set up a listener when change events are emitted
  //  /** Socket IO Connections */
   io.on('connection', socket => {
     console.log("conncted");
         changeStream.on("change", next => {
      // process any change event

      console.log("received a change to the collection: \t", next);
      console.log(next.documentKey._id);
      console.log("connected!");
      console.log("enter io.onsocoketinside onc change!");
      socket.emit('productRented', next.documentKey._id);

    });


    socket.on('disconnect', async () => {
        console.log('User Disconnected');
    });
  });
    // changeStream.on("change", next => {
    //   // process any change event

    //   console.log("received a change to the collection: \t", next);
           

    // });
        // use a timeout to ensure the listener is registered before the insertOne
    // operation is called.
    // await new Promise(resolve => {
    //   setTimeout(async () => {
    //     await users.insertOne({
    //       test: "sample movie document",
    //     });
    //     // wait to close `changeStream` after the listener receives the event
    //     setTimeout(async () => {
    //       resolve(await changeStream.close());
    //     }, 1000);
    //   }, 1000);
    // });
}); 

// const sessionStore = new MongoStore({
  //   mongooseConnection: db,
  //   collection: 'sessions',
  // });
  
  // client.connect(err => {
    //   const collection = client.db("surf-shop").collection("user");
    //   // perform actions on the collection object
    //   client.close();
    // });
    
    // use ejs-locals for all ejs templates:
    app.engine('ejs', engine);
    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    //setup public assets directory
    app.use(express.static('public'));
    
    app.use(logger('dev'));
    // app.use(bodyParser.json());
    // app.use(bodyParser.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(methodOverride('_method'));
    app.use(cors({ origin: ["http://localhost:8080/#/profile/signin/forgetpassword" ,"https://www.facebook.com", "http://localhost:8080", "http://localhost:8080/", "http://localhost:8081"], methods: ["GET", "POST", "PUT", "DELETE"], credentials: true,}));
    // app.use(cors());
    app.set('io', io);
    
    
    //configure Passport and Sessions

app.use(session({
  secret: 'hang te!@#!#dawdn dudwadadadawdadde!',
  resave: false,
  saveUninitialized: true,
//   store: MongoStore.create({
//     mongoUrl: uri,
//     touchAfter: 24 * 3600, // time period in seconds
// }),

}));

app.use(passport.initialize());

app.use(passport.session());

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());
//facebook strategy

require('./auth/facebook');

passport.serializeUser((user, done) => {

  return done(null, user._id);

});

passport.deserializeUser((id, done) => {

  User.findById(id, (err, user) => {
      if (!err) {
          return done(null, user);
      } else {
          return done(err, null);
      }
  });

});

/////////////////////////////////////////////////////////

// set local variables middleware
app.use(function(req, res, next) {
// response.setHeader("Access-Control-Allow-Origin", ["http://localhost:8080"]);
// response.setHeader("Access-Control-Allow-Credentials", "true");
// response.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
// response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

  // set default page title
  res.locals.title = 'salefny Shop';
  // req.user = {
  //   '_id': '608dd6e635527b36acf0f35e',
  //   'username': 'elsayed'
  // }
  res.locals.currentUser = req.user;
  // set success flash message
  res.locals.success = req.session.success || '';
  delete req.session.success;

  // set error flash message
  res.locals.error = req.session.error || '';
  delete req.session.error;
  // continue on to next function in middleware chains
  next();
});

//mountRoutes
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);



// /** Socket IO Connections */
// io.on('connection', socket => {
//   console.log("connected!");
//   socket.emit('productRented');

//   socket.on('disconnect', async () => {
//       console.log('User Disconnected');
//   });
// });

// io.of("/notf").on("connection", (socket) => {
//   socket.emit('notify');

// });





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
  // const err = new Error('Not Found');
  // err.status = 404;
  // next(err);
});

// // error handler
// app.use(function(err, req, res, next) {
//   // // set locals, only providing error in development
//   // res.locals.message = err.message;
//   // res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // req.session.error = err.message;
//   // // render the error page
//   // res.status(err.status || 500);
//   // res.render('error');
//   console.log(err['status']);
//   // res.send(req.session.error);
// 		// throw Error(err.message);
//     // res.send(new Error(err.message));
//     const {status} = err;
//     const {message} = err;
//     console.log(status)
//     console.log(message)
//     // res.status(status).send(message);
//     res.send(new Error(message));


// });

// app.get('/user', (req, res, next) => {
//   res.send(req.user);
// });

if (process.env.NODE_ENV !== 'test') {
  server.listen(process.env.PORT || 3000, () => {
      console.log(`[LOG=SERVER] Server started on port ${process.env.PORT}`);
  });
}


module.exports = app;
