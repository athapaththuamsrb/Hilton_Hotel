const RoomSchema = require('../model/RoomSchema');
const paymentSettlement=(req,resp)=>{
    RoomSchema.updateOne({roomNumber:req.body.roomNumber},
        {$set:{
                isAvailable:true,
                customer:{}
            }}).then(response=>{
        if(response.modifiedCount>0){
            resp.status(201).json({state:true, message:'Updated'});
            console.log("yes1");
        }else{
            console.log(response)
            resp.status(201).json({state:false, message:'Try Again'});
            console.log("yes2");
        }

    }).catch(error=>{
        resp.status(201).json({state:false, message:'Try Again..'});
        console.log("yes3");
    })
}
const bookingRoom=(req,resp)=>{
    console.log(req.body);
    RoomSchema.updateOne({roomNumber:req.body.roomNumber},
        {$set:{
                isAvailable:false,
                customer:{
                    name:req.body.userName,
                    address:req.body.address,
                    nic:req.body.nic,
                    contact:req.body.contact,
                    email:req.body.email,
                    payment:[],
                    bile:0
                }
        }}).then(response=>{
        if(response.modifiedCount>0){
            resp.status(201).json({state:true, message:'Updated'});
            console.log("yes1");
        }else{
            console.log(response)
            resp.status(201).json({state:false, message:'Try Again'});
            console.log("yes2");
        }

    }).catch(error=>{
        resp.status(201).json({state:false, message:'Try Again..'});
        console.log("yes3");
    })
}
const addingData=(req,resp)=>{
    RoomSchema.findOne({roomNumber:req.body.roomNumber},function (error,response1){
        // roomNumber,service,quantity
        if (response1!=null){
            RoomSchema.updateOne({roomNumber:req.body.roomNumber},
                {$set:{
                    customer:{
                        name:response1.customer.name,
                        address:response1.customer.address,
                        nic:response1.customer.nic,
                        contact:response1.customer.contact,
                        email:response1.customer.email,
                        payment:[...response1.customer.payment,{service:req.body.service, quantity:req.body.quantity}],
                        bile:req.body.bile+response1.customer.bile }

            }}).then(response=>{
                if(response.modifiedCount>0){
                    resp.status(201).json({state:true, message:'Updated'});
                    console.log("yes1");
                }else{
                    console.log(response)
                    resp.status(201).json({state:false, message:'Try Again'});
                    console.log("yes2");
                }
    });
}})}
const roomsData=(req,resp)=>{
    RoomSchema.find({roomType:req.body.RoomType},function (error,response){
        if (response!=null){
            resp.status(201).json({status:true,inform:response});
        }
        else {
            resp.status(201).json({status:false});
        }
    });
}
const customerData=(req,resp)=>{
    RoomSchema.findOne({roomNumber:req.body.roomNumber},function (error,response){
    if (response!=null){
        console.log(response.customer);
        resp.status(201).json({state:true,inform:response.customer});
    }
    else {
        resp.status(201).json({state:false});
    }
});
        }
module.exports={paymentSettlement, bookingRoom,addingData,roomsData,customerData};
