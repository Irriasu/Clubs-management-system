const express = require("express");
const cors = require("cors");
const session = require('express-session');

const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const UserRoutes = require("./routes/userRoutes")
const ClubRoutes = require("./routes/clubRoutes")
const CommentsRoutes = require("./routes/commentsRoutes")
const EventsRoutes = require("./routes/eventsRoute")
const MembersRoutes = require("./routes/membersRoutes")
const PvRoutes = require("./routes/pvRoutes")
const Auth = require("./routes/authRoutes")

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: false,
}));

// Use express.json() middleware to parse JSON bodies of requests
app.use(express.json());

//DB Connection
mongoose.connect('mongodb://mongo:27017/Ensi')
const db = mongoose.connection;
db.once("open",()=>{
  console.log("Connected to db")
})
//---------------------//


//-----Routes-----//
app.use(UserRoutes)
app.use(ClubRoutes)
app.use(MembersRoutes)
app.use(EventsRoutes)
app.use(CommentsRoutes)
app.use(PvRoutes)
app.use(Auth)
//-----------------//

app.listen(port,()=>{
  console.log("listening on port ",port)
})

// Cron job to check for expired events daily at midnight
// const cron = require('cron');
// cron.schedule('* * * * *', async () => {
//   try {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);

//     const clubs = await Club.find({});
//     clubs.forEach(async (club) => {
//       club.events.forEach(async (event) => {
//         if (new Date(event.date) < today) {
//           event.archived = true;
//         }
//       });

//       await club.save();
//     });

//     console.log('Checked for expired events and updated archive status');
//   } catch (error) {
//     console.error('Error checking for expired events:', error);
//   }
// });
