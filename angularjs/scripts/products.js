var app = angular.module('storeApp', []);

app.controller('ProductController', function () {
	var productList = this;
	
	productList.products = [{name:'mac air 1', thumb:'img1.jpg', price:500}, 
	{name:'mac air 2', thumb:'img2.jpg', price:600}, 
	{name:'mac air 3', thumb:'img3.jpg', price:700},
	{name:'mac air 4', thumb:'img4.jpg', price:800}];
});