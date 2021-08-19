const db = require("../models/");

const Sequelize = db.Sequelize;
const Actor = db["actor"];
const Movie_cast = db["movie_cast"];
const Movie = db["movie"];

Object.keys(db).forEach(key => console.log(key, ' ', db[key].associations));


const viewAllActors = async() => {
    const actors = await Actor.findAll();
    const result = actors.getMovieCasts();
    console.log(result);
}


const main = async() => {
    await viewAllActors();
}

main();