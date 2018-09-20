const express = require('express');
const router = express.Router();


router.get('/', (req,res) => res.json({ msg :'api user users users '}));

// @route GET api/users/test
// @desc Test post route
// @access Public
router.get('/test', (req,res) => res.json({ msg :'test test test'}));


module.exports = router;