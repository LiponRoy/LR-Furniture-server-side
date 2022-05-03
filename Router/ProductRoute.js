const RouteMe = require('express').Router();
const { ProductPost, GetAllProduct } = require('../controller/ProductContrl');
//for product insert
RouteMe.post('/insertdata', ProductPost);
//for product getting
RouteMe.get('/getData', GetAllProduct);

module.exports = RouteMe;
