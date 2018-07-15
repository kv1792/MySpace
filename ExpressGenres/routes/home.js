const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'My Express Genre Application',
        message: 'Movie Genres'
    })
});

module.exports = router;