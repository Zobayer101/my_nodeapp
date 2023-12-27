
const express=require('express');
const temple=require('../services/templet')
const controllapi=require('../controller/controllAPI')
const route=express.Router();

//view engine temple send method//

route.get('/home',temple.home);

route.get('/retrive',temple.retrive);

route.get('/create',temple.insert);

route.get('/update',temple.update);



//___all  API //

route.post('/api/save',controllapi.save);

route.get('/api/read',controllapi.read);

route.put('/api/update/:id',controllapi.update);

route.delete('/api/delete/:id',controllapi.delete);

module.exports=route;