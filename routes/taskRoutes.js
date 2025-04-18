const express = require('express');
const { getTasks, createTask } = require('../controllers/taskController');

const router = express.Router();

router.route('/')
  .get(getTasks)
  .post(createTask);

module.exports = router;