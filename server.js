
const express=require('express');
const dotenv=require('dotenv');
const bodyParsr=require('body-parser');
const path=require('path');
const DBconnect=require('./server/database/connectd');
const route=require('./server/routes/route');

const app=express();
dotenv.config();
const PORT=process.env.PORT||8080;

app.use(bodyParsr.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs','home.ejs');

DBconnect();

app.use('/route',route);

app.use('/img',express.static(path.resolve(__dirname,'assets/img')))
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.use((error,req,res,next)=>{
    if(error){
        console.log(error.message);
    }else{
        console.log(`This is a server side error `);
    }
})

app.listen(PORT,()=>{
    console.log(`Server on start http://localhost:${PORT}`);
})
