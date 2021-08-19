const db = require("../models/");

const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

// const Actor = db["actor"];
// const Movie_cast = db["movie_cast"];
const Movie = db["movie"];
const Reviewer = db["reviewer"];
const Rating = db['rating'];
const Op = Sequelize.Op;

// Object.keys(db).forEach(key => console.log(key, ' ', db[key].associations));


// 1. Write a query in SQL to find the name and year of the movies. 
const nameAndYearOfMovies = async() => {
    console.log('1. Write a query in SQL to find the name and year of the movies. ');
    const movies = await Movie.findAll({
        attributes: ['mov_title', 'mov_year']
    });
    for (const movie of movies) {
        console.log('Movie Title: ', movie.dataValues.mov_title, ', Movie_Year: ', movie.dataValues.mov_year);
    }
}

// 2. Write a query in SQL to find the year when the movie American Beauty released.

const movieYearOfSpecificMovie = async(title = 'American Beauty') => {
    console.log('2. Write a query in SQL to find the year when the movie American Beauty released.');
    const movies = await Movie.findOne({
        attributes: ['mov_year'],
        where: [{ mov_title: title }]
    });
    console.log('Year: ', movies.dataValues.mov_year);
}

// 3. Write a query in SQL to find the movie which was released in the year 1999.
const moviesReleasedInASpecificYear = async(year = 1999) => {
    console.log('3. Write a query in SQL to find the movie which was released in the year 1999.');
    const movies = await Movie.findAll({
        attributes: ['mov_title'],
        where: { mov_year: year }
    });
    for (const movie of movies) {
        console.log('Movie Title: ', movie.dataValues.mov_title);
    }
}

// 4. Write a query in SQL to find the movies which was released before 1998.
const moviesReleasedBeforeASpecificYear = async(year = 1998) => {
    console.log('4. Write a query in SQL to find the movies which was released before 1998.');
    const movies = await Movie.findAll({
        attributes: ['mov_title'],
        where: {
            mov_year: {
                [Op.lt]: year
            }
        }
    });
    for (const movie of movies) {
        console.log('Movie Title: ', movie.dataValues.mov_title);
    }
}

// 5. Write a query in SQL to return the name of all reviewers and name of movies together in a single list.
const nameOfReviewersWithMovies = async() => {
    console.log('5. Write a query in SQL to return the name of all reviewers and name of movies together in a single list.');

    const lists = await sequelize.query('SELECT reviewer.rev_name FROM reviewer UNION(SELECT movie.mov_title FROM movie);', { type: Sequelize.QueryTypes.SELECT });
    for (const list of lists) {
        console.log('Name: ', list.rev_name);

    }
}

// 6. Write a query in SQL to find the name of all reviewers who have rated 7 or more stars to their rating.

const nameOfReviewersWhoHaveRatedAboveSpecificStars = async(stars = 7) => {
    console.log('6. Write a query in SQL to find the name of all reviewers who have rated 7 or more stars to their rating.');

    const reviewers = await Reviewer.findAll({
        attributes: ['rev_name'],
        include: [{
            model: Rating,
            where: {
                rev_stars: {
                    [Op.gte]: stars
                }
            }
        }]
    });
    console.log(reviewers);
}


const main = async() => {
    // await nameAndYearOfMovies();
    // await movieYearOfSpecificMovie();
    // await moviesReleasedInASpecificYear();
    // await moviesReleasedBeforeASpecificYear();
    // await nameOfReviewersWithMovies();
    await nameOfReviewersWhoHaveRatedAboveSpecificStars();
}

main();