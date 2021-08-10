const fetch = require('node-fetch');
// const config = require('../config');
const API_KEY = "...";
// const MOVIE_API_PREFIX = 'http://omdapi.com/?apikey=';

const titleCache = {};
const byTitle = async (title) => {

    console.log("titleCache[title]", JSON.stringify(titleCache));

    if (titleCache[title]) {
        return titleCache[title].data
    }

    let result = await fetch(`http://omdapi.com/?apikey=${API_KEY}&t=${title}`);
    let data = await result.json();

    titleCache[title] = {
        data
    };

    return data;

    ;
};

module.exports = {
    byTitle
}