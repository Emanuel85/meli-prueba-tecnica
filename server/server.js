const express = require('express');
const cors = require("cors");
const compression = require("compression");
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());
app.use(cors())
app.use(compression())
/*
Los siguientes Middleware no son requeridos dado que el servicio consume un archivo mock
si se quisiera consumir una API externa, se deberian agregar los siguientes middleware

app.use(helmet());<-- Para proteger la aplicación de vulnerabilidades comunes
app.use(morgan("dev"));<-- Para registrar las solicitudes HTTP en la consola
app.use(express.json());<- Recomendado si solo estás sirviendo datos y no procesamos solicitudes con cuerpo, no es necesario.

*/

// Base route
app.get('/', (req, res) => {
  res.send('Bienvenidos a MELI-API📦');
});
const itemsRoutes = require('./routes/Routes');
const itemDetailRoutes = require('./routes/Routes');

// Use routes
app.use(itemsRoutes);
app.use(itemDetailRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
