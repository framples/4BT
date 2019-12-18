let express = require("express");
let cors = require("cors");
let bodyParser = require("body-parser");
let app = express();
let mongoose = require("mongoose");
let port = process.env.PORT || 5000
let path = require("path");

app.use(express.static(path.join(__dirname, '/client/build')));

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/4bt");

/*mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected!"))
  .catch(err => console.log(err)) */

let Users = require('./routes/Users')

app.use('/users', Users);

app.listen(port, () => {
  console.log("Server is running on port: " + port)
});