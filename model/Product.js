const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'please inter Product name'],
	},
	description: {
		type: String,
		required: [true, 'please inter Product Description'],
	},
	price: {
		type: String,
		required: [true, 'please inter Price'],
	},
	quantity: {
		type: Number,
		required: [true, 'please inter Product quantity'],
	},
	supplier: {
		type: String,
		required: [true, 'please inter Product supplier name'],
	},
	user_email: {
		type: String,
		required: [true],
	},
	imgUrl: {
		type: String,
		required: [true, 'please inter your image url'],
	},
});

module.exports = mongoose.model('product', ProductSchema);
