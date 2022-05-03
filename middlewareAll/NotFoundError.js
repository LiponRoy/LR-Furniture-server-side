// ei not fount ta pakistani dey nai,,but unknown route dile err handle hocche na
// tai pakistaner sathe sathe ei notfound o use korbo
exports.NotFound = (req, res, next) => {
	const error = new Error(`Not Found-${req.originalUrl}`);
	res.status(404);
	next(error);
};