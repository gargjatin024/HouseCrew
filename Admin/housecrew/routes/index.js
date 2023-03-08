var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Error Notification' });
});

// controller routes
const admin = require('../controllers/admin');


// admin routes
router.post('/admin/login', admin.login);
router.post('/admin/addservice', admin.addservice);
router.post('/admin/listservice', admin.listservice);
router.post('/admin/deleteservice', admin.deleteservice);


router.post('/admin/addperson', admin.addperson);
router.post('/admin/listperson', admin.listperson);
router.post('/admin/deleteperson', admin.deleteperson);
router.post('/admin/editperson', admin.editperson);
router.post('/admin/updateperson', admin.updateperson);
module.exports = router;
