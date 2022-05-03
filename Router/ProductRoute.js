const RouteMe = require('express').Router();
const { ProductPost } = require('../controller/ProductContrl');
//for product insert
RouteMe.post('/insertdata', ProductPost);

module.exports = RouteMe;
