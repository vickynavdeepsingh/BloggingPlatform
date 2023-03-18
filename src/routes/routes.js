const router= require('express').Router();
const userController=require('../controllers/userController')






router.post('/createuser',userController.createUser);
router.post('/loginuser',userController.loginUser);




module.exports=router;