const mongoose = require('mongoose');

const mongoConnect = async () => {
	try {
		const con = await mongoose.connect(process.env.Mongo_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			// useFindAndModify: false,
			// useCreateIndex: true,
		});
		console.log(`mongo db connected  :${con.connection.host}`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};
module.exports = mongoConnect;
