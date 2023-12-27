const UserDB=require('../model/model');

exports.save=(req,res)=>{
    if(!req.body){
        res.status(405).send(`Blank data can't save!`)
    } 
    const user= new UserDB({
        fname:req.body.fname,
        lname:req.body.lname,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password,
        gendar:req.body.gendar,
        status:req.body.status,
        datetime: new Date().toLocaleTimeString(),
    });

    user.save(user)
                .then((data)=>{
                    if(!data){
                        res.status(403).send(` somthing was wrong!`)
                    }else{
                        //res.send(data)
                        res.redirect('/route/create')
                    }
                })
                .catch((error)=>{
                    console.log(error.message)
                })
}

exports.read=(req,res)=>{
    UserDB.find()
            .then((data)=>{
                if(!data){
                    res.status(403).send(`Data not found!`)
                }else{
                    res.send(data)
                }
            })
            .catch((error)=>{
                console.log(error.message);
            })
}

exports.update=(req,res)=>{
    const ID=req.params.id;
    UserDB.findByIdAndUpdate(ID,req.body,{useFindAndModify:false})
                            .then((data)=>{
                                console.log(req.body)
                                if(!data){
                                    res.status(403).send('mybe your id was worng!')
                                }else{
                                    //console.log(data)
                                    //res.send(data)
                                    res.redirect('/route/update')
                                }
                            })
                            .catch((error)=>{
                                res.send(error)
                                console.log(error.message);
                            })
}

exports.delete=(req,res)=>{
    const ID=req.params.id;
    UserDB.findByIdAndDelete(ID)
                    .then((data)=>{
                        if(!data){
                            res.status(405).send(`your id mybe wrong!`)
                        }else{
                            res.end()
                        }
                    })
                    .catch((error)=>{
                        console.log(error.message)
                    })
}

