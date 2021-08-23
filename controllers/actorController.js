const db = require("../models/");

const Sequelize = db.Sequelize;
const Op = Sequelize.Op;

const Actor = db["actor"];
const Movie_cast = db["movie_cast"];
const Movie = db["movie"];
const Director = db["director"];
const Movie_Direction = db["movie_direction"];
const Rating = db["rating"];
const Reviewer = db["reviewer"];

Object.keys(db).forEach((key) => console.log(key, " ", db[key].associations));

// 1. Write a query in SQL to find the name and year of the movies.
const nameAndYearOfMovies = async () => {
  const movies = await Movie.findOne({
    where: { mov_id: 902 },
  });

  //   console.log(JSON.stringify(movies, null, 2));
  const result = await movies.getRatings();
  console.log(result);
  // for (const movie of movies) {
  //     console.log('Movie Title: ', movie.dataValues.mov_title, ', Movie_Year: ', movie.dataValues.mov_year);
  // }
};

// 10. Write a query in SQL to find the ID number for the actor whose first name is 'Woody' and the last name is 'Allen'.

const firstNameAndLastNameOfActors = async (
  firstName = "Woody",
  lastName = "Allen"
) => {
  console.log(
    "10. Write a query in SQL to find the ID number for the actor whose first name is 'Woody' and the last name is 'Allen'."
  );

  Actor.findAll({
    attributes: ["act_id"],
    where: { act_fname: firstName, act_lname: lastName },
    raw: true,
  })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

// 1. Write a query in SQL to list all the information of the actors who played a role in the movie 'Annie Hall'.

const actorsWhoPlayedRoleInSpecificMovie = async (movie = "Annie Hall") => {
  console.log(
    "1. Write a query in SQL to list all the information of the actors who played a role in the movie 'Annie Hall'."
  );
  Actor.findAll({
    attributes: ["act_fname", "act_lname"],
    include: [
      {
        model: Movie_cast,
        required: true,
        attributes: ["role"],
        include: [
          {
            model: Movie,
            attributes: [],
            required: true,
            where: { mov_title: movie },
          },
        ],
      },
    ],
    raw: true,
  }).then((actors) => {
    console.log(actors);
  });
};

// 2. Write a query in SQL to find the name of the director (first and last names) who directed a movie that casted a role for 'Eyes Wide Shut'. (using subquery)

const nameOfDirectorsWhoDirectedASpecificRole = (title = "Eyes Wide Shut") => {
  Director.findAll({
    attributes: ["dir_fname", "dir_lname"],
    include: {
      model: Movie_Direction,
      required: true,
      attributes: [],
      include: {
        model: Movie,
        required: true,
        attributes: [],
        where: { mov_title: title },
      },
    },
    raw: true,
  })
    .then((directors) => {
      console.log(directors);
    })
    .catch((error) => console.error(error));
};

// 3. Write a query in SQL to list all the movies which released in the country other than UK.

const listMoviesThatAreNotReleasedInSpecificCountry = async (
  country = "UK"
) => {
  console.log(
    "3. Write a query in SQL to list all the movies which released in the country other than UK."
  );
  Movie.findAll({
    attributes: ["mov_title", ["mov_rel_country", "releasing_country"]],
    where: { mov_rel_country: { [Op.not]: country } },
    raw: true,
  })
    .then((movies) => console.log(movies))
    .catch((error) => console.error(error));
};

// 4. Write a query in SQL to find the movie title, year, date of release, director and actor for those movies which reviewer is unknown

const listMoviesWithNoReviewers = async () => {
  Movie.findAll({
    attributes: ["mov_title", "mov_year", ["mov_dt_rel", "date of release"]],
    include: [
      {
        model: Movie_Direction,
        attributes: [],
        required: true,
        include: {
          model: Director,
          attributes: [
            ["dir_fname", "director_fname"],
            ["dir_lname", "director_lname"],
          ],
          required: true,
          raw: true,
        },
      },
      {
        model: Movie_cast,
        attributes: [],
        required: true,
        include: {
          model: Actor,
          attributes: ["act_fname", "act_lname"],
          required: true,
          raw: true,
        },
      },
      {
        model: Rating,
        attributes: [],
        required: true,
        include: {
          model: Reviewer,
          required: true,
          attributes: [],
          where: {
            rev_name: {
              [Op.is]: null,
            },
          },
        },
      },
    ],
    raw: true,
  })
    .then((movies) => console.log(movies))
    .catch((error) => console.error(error));
};

// 5. Write a query in SQL to find the titles of all movies directed by the director whose first and last name are Woddy Allen.

const titleOfAllMoviesDirectedByTheDirector = async (
  first_name = "Woody",
  last_name = "Allen"
) => {
  Movie.findAll({
    attributes: ["mov_title"],
    include: {
      model: Movie_Direction,
      attributes: [],
      required: true,
      include: {
        attributes: [],
        required: true,
        model: Director,
        where: { dir_fname: first_name, dir_lname: last_name },
      },
    },
    raw: true,
  })
    .then((movie) => {
      console.log(movie);
    })
    .catch((error) => {
      console.error(error);
    });
};

const main = async () => {
  // await viewAllActors();
  // await nameAndYearOfMovies();
  // await firstNameAndLastNameOfActors();
  // await actorsWhoPlayedRoleInSpecificMovie();
  // await nameOfDirectorsWhoDirectedASpecificRole();
  // await listMoviesThatAreNotReleasedInSpecificCountry();
  // await listMoviesWithNoReviewers();
  await titleOfAllMoviesDirectedByTheDirector();
};

main();
