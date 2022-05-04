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

app.get('/', (req, res) => {
	res.send('running LR Furniture ');
});
// middleware all
// app.use(cors);
app.use(bodyParser.json());
// getting router
app.use('/product', cors(), productRouteer);
app.use(errorMiddleware);

//connection with database with monggodb atlas and compass url
mongoDbConnect();

const port = process.env.PORT || 5000;
// make server
app.listen(port, () => {
	console.log('server is running');
});
