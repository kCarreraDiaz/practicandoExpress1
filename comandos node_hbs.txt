GIT
mkdir proyectos\profesor

git clone https://github.com/jfarfantecsup/node_hbs.git
cd node_hbs
npm install
npm start
localhost:3000/usuarios

***************** actualizar repositorio
cd node_hbs
git pull 

base de datos
1.
crear carpeta 
c:\proyectos\tecsup
2.
crear archivo db.js
******************************************
conn = new Mongo();

db = conn.getDB('tecsupdb');
db.usuarios.insert(
    [
        {nombre:'James',
        apellido:'Farfan',
        email: 'jfarfan@abc.com',
        estado: 'A', 
        created_at: new Date ('07/01/2020')}
    ]
);
******************************************
3. aplicacion
* instalar el generador de express
npm install express-generator -g

express --view=hbs node_hbs
cd node_hbs

******************************************
4. agregar mas librerias
npm install
npm install body-parser
npm install mongoose
npm install nodemon -D

******************************************
5 . ejecutar
npm start

******************************************
6. en app.js

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//conexion  BD
var mongoDB = 'mongodb://127.0.0.1:27017/tecsupdb';
mongoose.connect(mongoDB,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console,'Error de conexion MongoDB'));

******************************************
7. models\Usuario.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nombre: {type: String, required:true, max:20},
    apellido: {type: String, required:true, max:20},
    email: {type: String, required:true, max:30},
    estado: {type: String, required:true, max:2},
    created_at: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Usuario', UsuarioSchema);

******************************************

******************************************
******************************************
******************************************
******************************************
******************************************
******************************************

******************************************
******************************************

******************************************
******************************************
******************************************
******************************************
******************************************
******************************************

******************************************
******************************************

******************************************
******************************************
******************************************