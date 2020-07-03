var express = require('express');
var router = express.Router();

var curso = require('../controllers/CursoController');

router.get('/', curso.list);
router.get('/create', curso.create);
router.post('/save', curso.save);
router.get('/show/:id', curso.show);
router.get('/edit/:id', curso.edit);
router.post('/update/:id', curso.update);
router.post('/delete/:id', curso.delete);


module.exports = router;