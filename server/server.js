/*** Creación del servidor Video 78 ***/
require('./config/config'); // Incluimos la configuración del proyecto. (Video 82)

const express = require('express');
const bodyParser = require('body-parser'); // Agregamos el paquete body-parser (Video 79 min 7)

const app = express();

/**
 * Configuramos body-parser (Video 79 min 7) 
 * Añade a las peticiones en la req la propiedad body, con el payload body que recibe la petición
 */
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// Petición GET (Video 79 min 0)
app.get('/usuarios', function (req, res) {
  res.json('POST Usuario');
});

// Petición POST (Video 79 min 0)
app.post('/usuarios', function (req, res) {
  // Cogemos el body procesado por body-parser (Video 79 min 8)
  const body = req.body;

  // Comprobamos si nos envían el nombre para enviar estado HTTP (Video 81 min 1)
  if (body.nombre === undefined) {
    // Status 400, Bad Request -> Solicitud contiene sintaxis errónea.
    res.status(400).json({
      success: false,
      mensaje: 'El nombre es necesario'
    });
  } else {
    res.json({body});
  }
});

// Petición PUT (Video 79 min 0)
// Recibir parámetros: /:id Recibirá la id y para leer utilizamos req.params.id (Video 79 min 4)
app.put('/usuarios/:id', function (req, res) {
  const id = req.params.id; // Recibir parametro id
  res.json({id});
});

// Petición DELETED (Video 79 min 0)
app.delete('/usuarios', function (req, res) {
  res.json('DELETED Usuario');
});

app.listen(process.env.PORT, () => {console.log(`Escuchando puerto ${process.env.PORT}`);});