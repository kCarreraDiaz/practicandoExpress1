var express = require('express');
var router = express.Router();

var usuario = require('../controllers/UsuarioController');

router.get('/', usuario.list);
router.get('/create', usuario.create);

module.exports = router;