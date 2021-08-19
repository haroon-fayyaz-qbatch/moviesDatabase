const db = require("../models/");

const Sequelize = db.Sequelize;
const Actor = db["actor"];
const Movie_cast = db["movie_cast"];
const Movie = db["movie"];

Object.keys(db).forEach(key => console.log(key, ' ', db[key].associations));


// 1. Write a query in SQL to find the name and year of the movies. 
const nameAndYearOfMovies = async() => {
    const movies = await Movie.findAll({
        attributes: ['mov_title', 'mov_year']
    });
    for (const movie of movies) {
        console.log('Movie Title: ', movie.dataValues.mov_title, ', Movie_Year: ', movie.dataValues.mov_year);
    }
}


const main = async() => {
    // await viewAllActors();
    await nameAndYearOfMovies();
}

main();