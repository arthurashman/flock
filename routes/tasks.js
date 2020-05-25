const express = require('express')
const router = express.Router();

const Task = require('../models/Task');
const Subtask = require('../models/Subtask');

router.get('/test', (req, res) => res.send('Task route testing'));

router.get('/', (req, res) => {
  Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(404).json({ notasksfound: 'No Tasks found'}));
});

router.get('/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(err => res.status(404).json({ notasksfound: 'No Task found'}));
});

router.post('/', (req, res) => {
  Task.create(req.body)
    .then(task => res.json({ msg: 'Task added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this task'}));
});

router.put('/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body)
    .then(task => res.json({ msg: 'Updated successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to update this task'}));
});

router.delete('/:id', (req, res) => {
  Task.findByIdAndRemove(req.params.id, req.body)
    .then(task => res.json({ msg: 'Task entry deleted successfully'}))
    .catch(err => res.status(404).json({ error: 'No such task'}));
});

router.post('/:id', (req, res) => {
  Subtask.create(req.body)
    .then(subtask => res.json({ msg: 'Subtask added successfully'}))
    .catch(err => res.status(400).json({ error: 'Unable to add this subtask'}));
});

module.exports = router;