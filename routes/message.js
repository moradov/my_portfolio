const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Message = require('../model/Message');
router.post(
  '/',
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
module.exports = router;
