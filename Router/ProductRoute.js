const RouteMe = require('express').Router();
const { ProductPost, GetAllProduct, GetSingleProduct, UpdateProduct } = require('../controller/ProductContrl');
//for product insert
RouteMe.post('/insertdata', ProductPost);
//for product getting
RouteMe.get('/getData', GetAllProduct);
//Getting single product
// RouteMe.get('/getSingleDataByID/:id', GetSingleProduct);
RouteMe.put('/updateData/:id', UpdateProduct);

module.exports = RouteMe;
