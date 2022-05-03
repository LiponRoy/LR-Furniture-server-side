const userModel = require('../model/userModel');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

exports.jwtProtect = asyncHandler(async (req, res, next) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			token = req.headers.authorization.split(' ')[1];
			const decode = jwt.verify(token, process.env.SECRET);

			req.user = await userModel.findById(decode.id).select('-password');
			console.log(req.user);
			next();
		} catch (error) {
			res.status(401);
			throw new Error('Not Authorize,token failed');
		}
	}
	if (!token) {
		res.status(401);
		throw new Error('Not Authorize,no token');
	}
});
