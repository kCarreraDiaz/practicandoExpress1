var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EmpleadoSchema = new Schema({
    nombre: {type: String, required:true, max:20},
    apellido: {type: String, required:true, max:20},
    email: {type: String, required:true, max:30},
    dni: {type: String, required:true, max:8},
    sexo: {type: String, required:true, max:1},
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Empleado', EmpleadoSchema);