const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
//error middleware
const errorMiddleware = require('./middlewareAll/errorMiddleware');
// Import Router
const productRouteer = require('./Router/ProductRoute');
// connect to mongodb url
const mongoDbConnect = require('./DB_connect/MongodbMe');
// configuration dot env file
dotenv.config({ path: 'config.env' });
// middleware all
// app.use(cors);
app.use(bodyParser.json());
// getting router
app.use('/product', cors(), productRouteer);
app.use(errorMiddleware);

//connection with database with monggodb atlas and compass url
mongoDbConnect();

// make server
app.listen(process.env.PORT || 5000, () => {
	console.log(`server is running on port ${process.env.Port}`);
});
