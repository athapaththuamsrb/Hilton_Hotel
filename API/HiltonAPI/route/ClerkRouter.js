const express=require('express');
const ClerkController=require('../controller/ClerkController');
const router =express.Router();
router.post("/signUp", ClerkController.saveClerk);
router.post("/deleteClerk", ClerkController.deleteClerk);
router.get("/getAllClerk",ClerkController.getAllClerk)
module.exports = router;
