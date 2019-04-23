const mongoose      = require('mongoose'),
      autoIncrement = require('mongoose-auto-increment'),
      xInfo   = require('./x-info'),
      path    = require('path'),
      fs      = require('fs'),
      dbName  = 'ITEMS';

mongoose
  // .connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true })
  .connect(xInfo.mongoose.db, { useNewUrlParser: true })
  .then(()=>console.log(`MongoDB connected\n`))
  .catch(err=>console.log(`\n${err}\n`));

autoIncrement.initialize(mongoose.connection);

// Register all the models
const models_path = path.join(__dirname, '../models');
fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});


