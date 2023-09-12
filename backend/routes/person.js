const express = require('express');
const router = express.Router();
const PersonController = require('../controllers/PersonController');
 
router
    .get('/', PersonController.getAll)
    .get('/:id', PersonController.getPersonById)
    .post('/', PersonController.create)
    .patch('/:id', PersonController.updatePerson)
    .delete('/:id', PersonController.deleteById)

module.exports = router