const errhandler = require('./errorHendeler');
// exports.NotFound = (req, res, next) => {
// 	const error = new Error(`Not Found-${req.originalUrl}`);
// 	res.status(404);
// 	next(error);
// };

// exports.errHandle = (err, req, res, next) => {
// 	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
// 	res.status(statusCode);
// 	res.json({
// 		message: err.message,
// 		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
// 	});

// 	res.status(404);
// 	next(error);
// };

//another one PAKISTANIR
module.exports = (err, req, res, next) => {
	err.statusCode = err.statusCode || 500;
	//err.message = err.message || 'internal server error';
	if (process.env.NODE_ENV === 'DEVELOPMENT') {
		res.status(err.statusCode).json({
			success: false,
			error: err,
			// eikhaner message ta and frontend er rudex er moddheo same name dite hobe mane message dite hobe
			//na hole message ta frontend e print hobe na
			message: err.message,
			stack: err.stack,
		});
	}

	if (process.env.NODE_ENV === 'PRODUCTION') {
		let error = { ...err };
		error.message = err.message;

		res.status(error.statusCode).json({
			success: false,
			message: error.message || 'internal server error',
		});
	}
};
