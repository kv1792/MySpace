const express = require('express');
const validateGenreName = require('./validateGenreName');

const app = express();

app.use(express.json());

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

app.get('/', (req, res) => {
    res.send(genres);
});

app.get('/genres/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));

    !genre ? res.status(404).send('No such Genre found') : res.send(`Genre Name - ${genre.genre}`);

});

app.post('/genres', (req, res) => {

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

app.put('/genres/:id', (req, res) => {
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

app.delete('/genres/:id', (req, res) => {
    const genre = genres.find(genre => genre.id === parseInt(req.params.id));

    if (genre) {
        genres.splice(genres.indexOf(genre), 1);
        res.send(`Your specified genre has been removed. ${genres}`);
    } else {
        res.status(400).send(`No such genre found to delete.`);
    }
});


app.listen(3000, () => console.log('listening on port 3000...'));