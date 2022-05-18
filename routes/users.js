const User = require('../models/User');
const ruta = require('express').Router();

ruta.get('/', (req, res) => {
    User.findAll().then(result => res.json(result));
})

ruta.post('/', (req, res) => {
    User.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        mail: req.body.mail
    }).then(result => res.json(result));
})

ruta.get('/:id', (req, res) => {
    let id = req.params.id;
    User.findOne({where: {id: id}}).then(result => res.json(result));
})

ruta.put('/:id', (req, res) => {
    let id = req.params.id;
    let data = req.body;
    User.findOne({
        where: {id: id}
    }).then(result => result.update(data)
    .then(newUser => res.json(newUser)))
})

ruta.delete('/:id', (req, res) => {
    let id = req.params.id;
    User.destroy({
        where: {id:id}
    }).then(result => res.json(result))
})

module.exports = ruta;