const movies = require('../pkg/movies/index')

const getMovie = async (req, res) => {
    try{
        const data = await movies.byTitle(req.params.title)
        res.status(200).send(data);

    }catch(err) {
        res.status(500).send('Internal Server Error');
        console.log(err);
    }

};

module.exports = {
    getMovie
}