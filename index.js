const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/users', require('./routes/users'));

db.sync().then(() => {
    console.log('Conexion a la BD exitosa!!!')
}).catch(err => {console.error('error:', err)})

app.listen(9090, () => {
    console.log('Server corriendo en el puerto: ', 9090)
})