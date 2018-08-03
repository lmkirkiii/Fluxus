const mongoose = require("mongoose");

<<<<<<< HEAD
=======

>>>>>>> newmodel

if (process.env.NODE_ENV == "production") {
    mongoose.connect(process.env.MLAB_URL)
  } else {
    mongoose.connect("mongodb://localhost/fluxer");
  }

<<<<<<< HEAD
  mongoose.Promise = Promise;
  
  module.exports = mongoose;
=======
mongoose.Promise = Promise;
module.exports = mongoose;
>>>>>>> newmodel
