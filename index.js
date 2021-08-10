//imports/requires
const express = require('express')
const movies = require('./handlers/movies')



//declaration
const api = express();

//middleware
api.use(express.json())

//routes

api.get('/movie/:title', movies.getMovie);

//start
api.listen(9001,err => {
    if(err){
        return console.log(err);
    }
    console.log('Service started on port 9001')

})