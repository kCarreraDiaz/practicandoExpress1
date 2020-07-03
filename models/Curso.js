var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CursoSchema = new Schema({
    nombre: {type: String, required:true, max:20},
    creditos: {type: String, required:true, max:20},
    nrohoras: {type: String, required:true, max:30},
})

module.exports = mongoose.model('Curso', CursoSchema);