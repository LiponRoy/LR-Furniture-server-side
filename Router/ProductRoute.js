const RouteMe = require('express').Router();
const { ProductPost, GetAllProduct, GetSingleProduct, UpdateProduct, DeleteProduct } = require('../controller/ProductContrl');
//for product insert
RouteMe.post('/insertdata', ProductPost);
//for product getting
RouteMe.get('/getData', GetAllProduct);
//Getting single product
RouteMe.get('/getSingleDataByID/:id', GetSingleProduct);
//Update product
RouteMe.put('/updateData/:id', UpdateProduct);
//Delete product
RouteMe.get('/deleteData/:id', DeleteProduct);

module.exports = RouteMe;
