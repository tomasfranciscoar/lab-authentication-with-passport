const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/boss-account', (req, res) => {
  res.render('boss-account', {user: req.user})
})

module.exports = router;
