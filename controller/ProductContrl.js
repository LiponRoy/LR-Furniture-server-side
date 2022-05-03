const ProductModel = require('../model/Product');
const asyncHandler = require('express-async-handler');
const ErrorHandler = require('../middlewareAll/errorHendeler');
//..........
//............
exports.ProductPost = asyncHandler(async (req, res, next) => {
	const { name, description, price, quantity, supplier, imgUrl } = req.body;
	const newProduct = await ProductModel.create({
		name,
		description,
		price,
		quantity,
		supplier,
		imgUrl,
	});

	if (!newProduct) {
		return next(new ErrorHandler('product not posted... ', 400));
	}

	res.status(200).json({
		success: true,
		newProduct,
	});
});

// getting all product
exports.GetAllProduct = asyncHandler(async (req, res, next) => {
	const allProduct = await ProductModel.find();

	if (!allProduct) {
		return next(new ErrorHandler('product not found... ', 400));
	}

	res.status(200).json({
		success: true,
		allProduct,
		count: allProduct.length,
	});
});
