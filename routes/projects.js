const express = require('express');
const router = express.Router();

const Project = require('../model/Project');

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json(error);
  }
});
module.exports = router;
