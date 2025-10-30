const express = require('express');
const router = express.Router();

const getAll = require('../controllers/getall');
const getId = require('../controllers/getid');
const getStatus = require('../controllers/getstatus');
const create = require('../controllers/create');
const updateSal = require('../controllers/update');
const delUser = require('../controllers/delete');

router.get('/all', getAll);
router.get('/id/:id', getId);
router.get('/status/:status', getStatus);
router.post('/create', create);
router.put('/update/:id', updateSal);
router.delete('/delete/:id', delUser);

module.exports = router;
