const express = require('express');
const router = express.Router();

router.get('/', (req,res) => res.json({ msg :'api profile test'}));

// @route GET api/profile/test
// @desc Test post route
// @access Public
router.get('/test', (req,res) => res.json({ msg :'api profile test'}));




module.exports = router;