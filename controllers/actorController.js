const db = require("../models/");

const Sequelize = db.Sequelize;
const Actor = db["actor"];
const Movie_cast = db["movie_cast"];
const Movie = db["movie"];

// console.log(Actor.associations);
// console.log(Movie.associations);
// console.log(Movie_cast.associations);


Object.keys(db).forEach(key => console.log(key, ' ', db[key].associations));