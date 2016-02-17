

//Configuring the application

/**
	Initializing express, bodyparser, mongodb
**/
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/**
	Creating app context
**/
var app = express();

/**
	MongoDB connection string
**/
var connectionString = 'mongodb://localhost:27017/todo';
mongoose.connect(connectionString);

/**
	setting data parser for request
**/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/**
	Creating routers
**/
var movieRoutes = require('./routes/item');
app.use('/api', movieRoutes);

module.exports = app;
