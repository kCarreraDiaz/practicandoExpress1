var mongoose = require('mongoose');
var Curso = require('../models/Curso');

var cursoController = {};

cursoController.list = function(req, res) {

    Curso.find({}).exec(function(err, listaCursos) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/curso/index',{cursos: listaCursos });

    });
};

cursoController.create = function(req, res) {
    res.render('../views/curso/create');
};

cursoController.save = function(req, res) {
    var curso = new Curso( req.body );

    curso.save(function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Curso creado satisfactoriamente");
        res.redirect("/cursos/show/" + curso._id);
        // res.redirect("/empleados");        

    });
};

cursoController.show = function(req, res) {

    Curso.findOne({ _id: req.params.id }).exec(function(err, curso) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/curso/show',{curso: curso });

    });
};

cursoController.edit = function(req, res) {

    Curso.findOne({ _id: req.params.id }).exec(function(err, curso) {
        if (err) {
            console.log('Error', err);
            return;
        }
        res.render('../views/curso/edit',{curso: curso });

    });
};

cursoController.delete = function(req, res) {

    Curso.remove( { _id: req.params.id}, function(err) {
        if (err) {
            console.log('Error', err);
            return;
        }
        console.log("Curso eliminado");
        res.redirect('/cursos');

    });
};

cursoController.update = function(req, res){

    Curso.findByIdAndUpdate( req.params.id, {$set: {
        nombre: req.body.nombre,
        creditos: req.body.creditos,
        nrohoras: req.body.nrohoras
    }}, { new: true },

    function( err, curso){
        if( err ){ 
            console.log('Error: ', err); 
            res.render('../views/curso/edit', {curso: req.body} );
        }
        
        console.log( curso );
        
        res.redirect('/cursos/show/' + curso._id);
        
    });
};


module.exports = cursoController;
