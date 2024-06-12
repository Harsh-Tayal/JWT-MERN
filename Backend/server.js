const dotenv = require('dotenv');
const cors = require("cors");
dotenv.config({ path: './config.env' });
const app = require('./app');
const mongoose = require('mongoose');
mongoose.connect("Your Connection String")
  .then(() => {
    console.log(`connection successful`);
  }).catch((err) => {
    console.log(err.errmsg);
  });
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
