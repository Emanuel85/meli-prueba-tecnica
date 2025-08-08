const express = require('express');
const app = express();
const PORT = 3001;

// Middleware to parse JSON
app.use(express.json());
/*
Los siguientes Middleware no son requeridos dado que el servicio consume un archivo mock
si se quisiera consumir una API externa, se deberian agregar los siguientes middleware

app.use(cors()); <-- Para permitir solicitudes desde otros dominios
app.use(helmet());<-- Para proteger la aplicación de vulnerabilidades comunes
app.use(compression());<-- Para comprimir las respuestas y mejorar el rendimiento
app.use(morgan("dev"));<-- Para registrar las solicitudes HTTP en la consola
app.use(express.json());<- Recomendado si solo estás sirviendo datos y no procesamos solicitudes con cuerpo, no es necesario.

*/ 

// Base route
app.get('/', (req, res) => {
  res.send('Bienvenidos a MELI-API📦');
});
const productRoutes = require('./routes/productRoutes');
const itemDetailRoutes = require('./routes/productRoutes');

// Use routes
app.use(productRoutes);
app.use(itemDetailRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
