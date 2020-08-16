const express = require('express');
const router = express.Router();

const akunController = require('../controller/akunController');


(() => akunController.db_connect )();

router.get('/', akunController.akun_index);
router.get('/create', akunController.akun_get_create);
router.post('/create', akunController.akun_create);
router.post('/update', akunController.akun_update);
router.post('/delete', akunController.akun_delete);


module.exports = router;