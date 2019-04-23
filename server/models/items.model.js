
let mongoose        = require('mongoose'),
		uniqueValidator = require('mongoose-unique-validator'),
		autoIncrement   = require('mongoose-auto-increment');

const nameMin = 4, nameMax = 40, textMax = 400;

const itemSchema = new mongoose.Schema({
	name: {
		type: String, min: nameMin, max: nameMax, 
		unique: true, lowercase: true, trim: true,
		required: [true, `Name is a required field with ${nameMin} to ${nameMax} characters.`]
  },
	description: {
		type: String, trim: true, 
		max: [textMax, `${textMax} characters most for the description field`],
		default: 'No description provided'
  },
  price: { 
		type: Number, 
		default: 0, min: [0, `The price must be greater than or equal to 0.`]
	},
  image_url: { 
		type: String,
		trim: true 
	},
  buy_url: { 
		type: String, 
		trim: true 
	},
  hidden: { 
		type: Boolean, 
		default: false 
	}

 }, {timestamps: true});

itemSchema.plugin(uniqueValidator);
itemSchema.plugin(autoIncrement.plugin, 'Item');

module.exports = Item = mongoose.model('Item', itemSchema);
