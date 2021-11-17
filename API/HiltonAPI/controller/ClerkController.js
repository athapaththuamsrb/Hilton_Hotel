const Clerk = require('../model/ClerkSchema');

const saveClerk = (req, resp) => {

    console.log(req.body);

    const tempClerk= new Clerk({
        _id:req.body.nic,
        name:req.body.name,
        address:req.body.address,
        contact:req.body.contact,
        position:req.body.position,
        email:req.body.email
    });

    tempClerk.save().then(()=>{
        resp.status(201).json({status:true, message:'Saved..'});
    }).catch(error=>{
        resp.status(201).json({status:false, message:'Try Again..'});
    })
}


const deleteClerk = (req, resp) => {

    Clerk.deleteOne({_id:req.body.nic}).then(response=>{
        if(response.deletedCount>0){
            resp.status(201).json({status:true, message:'Deleted'});
        }else{
            console.log(response)
            resp.status(201).json({status:false, message:'Try Again'});
        }

    }).catch(error=>{
        resp.status(201).json({status:false, message:'Try Again..'});
    })

}

const getAllClerk = (req, resp) => {
    Clerk.find().then(response=>{
        resp.status(200).json({status:true, data:response});
    }).catch(error=>{
        resp.status(201).json({status:false, message:'Try Again..'});
    })
}
module.exports={saveClerk, deleteClerk, getAllClerk}

