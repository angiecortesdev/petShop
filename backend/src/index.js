const express = require('express');
require('dotenv').config();
require('colors')


const app = express();

//Models
require('./database');
require('./models/envios')
require('./models/comentarios')
require('./models/facturas')


//Middleware
app.use(express.json())


//Rutas
app.use('/', require('./routers/rtrEnvios'))
app.use('/', require('./routers/rtrFacturas'))
app.use('/', require('./routers/rtrComentarios'))


//PORT
app.listen(process.env.PORT), console.log(`Listen on port...`.rainbow)