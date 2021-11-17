const bcrypt = require('bcrypt');
const UserSchema = require('../model/UserSchema');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const signUp=(req,resp)=>{
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        const user = new UserSchema({
            userName:req.body.userName,
            _id:req.body.nic,
            address:req.body.address,
            contact:req.body.contact,
            accountType:req.body.accountType,
            email:req.body.email,
            password:hash
        });

        user.save().then(response=>{
            resp.status(201).json({status:true});
        }).catch(error=>{
            console.log(error)
            resp.status(201).json({status:false,message:error});
        });
    });


};
const login=(req,resp)=>{
    UserSchema.findOne({email:req.headers.email}).then(response=>{

        if (response!==null){
            // actual user

            bcrypt.compare(req.headers.password, response.password, function(err, result) {
                // result == true
                if (result){
                    // create token
                    const token = jwt.sign(
                        {email:response.email, userName:response.userName,accountType:response.accountType},
                        process.env.JWT_ACCESS_KEY,
                        {expiresIn: '5h'}
                    )
                    resp.status(201).json({status:true,token:token});
                }else{
                    resp.status(201).json({status:false,message:"UnAuthorized Request"});
                }
            });

        }else{
            resp.status(200).json({status:false,message:"not found"});
        }

    }).catch(error=>{
        resp.status(201).json({status:false,message:error});
    })
}

module.exports={signUp, login}
