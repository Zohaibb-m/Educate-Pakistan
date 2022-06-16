const router=require('express').Router()
const dataCtrl = require('../controllers/dataCtrl')

router.post("/getData",dataCtrl.getCourses)
router.post("/getCourseData",dataCtrl.getCourseData)

module.exports=router 