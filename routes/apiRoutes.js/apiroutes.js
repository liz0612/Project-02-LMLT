const express = require('express');
const { addExercise } = require('../controllers/exerciseController');
const router = express.Router();

// POST route to add a new exercise
router.post('/add', addExercise);

module.exports = router;
