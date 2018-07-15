const express = require('express');
const router = express.Router();
const validateGenreName = require('../validateGenreName');

const genres = [{
    id: 1,
    genre: 'Thriller'
}, {
    id: 2,
    genre: 'Action'
}, {
    id: 3,
    genre: 'Romance'
}, {
    id: 4,
    genre: 'Comedy'
}];

router.get('/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));

    !genre ? res.status(404).send('No such Genre found') : res.send(`Genre Name - ${genre.genre}`);

});

router.post('', (req, res) => {

    const result = validateGenreName(req.body);
    const {
        error
    } = result;

    if (error) {
        res.status(400).send(`Bad Request: ${error.details[0].message}`);
    } else {
        const newGenre = {
            id: genres.length + 1,
            genre: req.body.name
        };
        genres.push(newGenre);
        res.send(`Genre has been added successfully ${genres}`);
    }
});

router.put('/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));

    if (genre) {
        const result = validateGenreName(req.body);
        const {
            error
        } = result;

        if (error) {
            res.status(400).send(`Bad Request : ${error.details[0].message}`);
        } else {
            genre.genre = req.body.name;
            res.send(`Genre has been updated : ${genre}`);
        }
    } else {
        res.status(400).send(`No such genre found to update.`);
    }
});

router.delete('/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));

    if (genre) {
        genres.splice(genres.indexOf(genre), 1);
        res.send(`Your specified genre has been removed. ${genres}`);
    } else {
        res.status(400).send(`No such genre found to delete.`);
    }
});

module.exports = router;