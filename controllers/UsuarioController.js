var mongoose = require('mongoose');
var Usuario = require('../models/Usuario');

var usuarioController = {};

usuarioController.list = function(req, res) {

    Usuario.find({}).exec(function(err, usuarios) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/usuario/index',{usuarios: usuarios });

    });
};

usuarioController.create = function(req, res) {
    res.render('../views/usuario/create');
};

module.exports = usuarioController;