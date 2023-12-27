
const axios=require('axios');
const { response } = require('express');

exports.home=(req,res)=>{
    res.render('home')
}

exports.insert=(req,res)=>{
    res.render('create')
}

exports.retrive=(req,res)=>{
    axios.get('http://localhost:3300/route/api/read')
    .then((response)=>{
        //console.log(response.data)
        res.render('retrive',{Users:response.data})
    })
    .catch((error)=>{
        console.log(error.message)
    })
    
}

exports.update=(req,res)=>{
    axios.get('http://localhost:3300/route/api/read',{params:{id:req.query.id}})
    .then((response)=>{
        const ID=response.config.params.id;
        const DATA=response.data;
        const length=response.data.length;
        //console.log(ID)
        for(let i=0;i<length;i++){
            if(DATA[i]._id==ID){
                var N=i;
                
                break;
            }
        }
        //console.log(DATA[N])
        //console.log(response.config.params.id); 
        res.render('update',{Users:DATA[N]})
    })
    .catch((error)=>{
        console.log(error.message)
    })
    
} 