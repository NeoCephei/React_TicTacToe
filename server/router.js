const express = require('express');
const router = express.Router();
const taskMethods = require('./controllers/controller')

router.get('/tasks', taskMethods.getTasks);

router.post('/tasks', taskMethods.postTask);

router.put('/tasks/:id/:flag', taskMethods.markTask);

router.delete('/tasks/:id', taskMethods.deleteTask);

module.exports = router;