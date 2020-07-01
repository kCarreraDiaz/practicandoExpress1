var express = require('express');
var router = express.Router();

var usuario = require('../controllers/UsuarioController');

router.get('/', usuario.list);
router.get('/create', usuario.create);
router.post('/save', usuario.save);
router.get('/show/:id', usuario.show);
router.get('/edit/:id', usuario.edit);
router.post('/update/:id', usuario.update);

module.exports = router;