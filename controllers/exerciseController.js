const Exercise = require('../models/Exercise');

// Add a new exercise
const addExercise = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newExercise = await Exercise.create({ title, description });

    res.status(201).json(newExercise); // Respond with created exercise
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add exercise' });
  }
};

module.exports = { addExercise };
