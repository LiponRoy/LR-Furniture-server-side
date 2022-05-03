const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// connect to mongodb url
const mongoDbConnect = require('./DB_connect/MongodbMe');
// configuration dot env file
dotenv.config({ path: 'config.env' });
// middleware all
app.use(cors);
app.use(bodyParser.json());

//connection with database with monggodb atlas and compass url
mongoDbConnect();

// make server
app.listen(process.env.PORT, () => {
	console.log(`server is running on port ${process.env.Port}`);
});
