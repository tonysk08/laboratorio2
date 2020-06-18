const express = require('express');
const defaultControllerr = require("../controllers/index");
const router = express.Router();

router.get('/',defaultControllerr.home);
router.get('/about',defaultControllerr.about);
router.get('/destinos',defaultControllerr.destinos);
router.get('/horario',defaultControllerr.horario);
router.get('/contact',defaultControllerr.contact);
router.get('*',defaultControllerr.notFoud);
module.exports = router;