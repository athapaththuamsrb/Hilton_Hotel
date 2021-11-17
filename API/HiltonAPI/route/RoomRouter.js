const express=require('express');
const RoomController=require('../controller/RoomController');
const router =express.Router();
router.post("/addingData", RoomController.addingData);
router.post("/bookingRoom", RoomController.bookingRoom);
router.post("/paymentSettlement",RoomController.paymentSettlement);
router.post("/roomsInformation",RoomController.roomsData);
router.post("/customer/information",RoomController.customerData);
module.exports = router;
