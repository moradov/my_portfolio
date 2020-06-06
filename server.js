const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');

//connect to the data base
mongoose
  .connect(
    'mongodb+srv://morad:morad123@cluster0-tqyij.mongodb.net/portfolio?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log('Mongo db is connected'))
  .catch(err => {
    console.log(db);
    console.log(err.message);
    process.exit(1);
  });

const Project = require('./model/Project');
const Message = require('./model/Message');

// // Init Middlewares
app.use(express.json({ extended: false }));
let allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
};
app.use(allowCrossDomain);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('the server work at port ' + PORT));
app.get('/api', async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json(error);
  }
});

app.post(
  '/api',
  [
    check('name')
      .isString()
      .not()
      .isEmpty(),
    check('email')
      .isEmail()
      .not()
      .isEmpty(),
    check('message')
      .isString()
      .not()
      .isEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json(errors);
    }

    const { name, email, message } = req.body;
    try {
      const msg = await new Message({
        name,
        email,
        message
      }).save();
      if (!msg) {
        return res.status(404).json('the request failed');
      }
      res.status(202).json('message sent');
    } catch (error) {
      res.status(404).json(error);
    }
  }
);
