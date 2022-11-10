const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGODB_URI)
.then(db => console.log('Conectada Correctamente'.bgGreen))
.catch(err => console.log(`Error al conectarse ${err}`.bgRed))