const db = require("../models/");

const Sequelize = db.Sequelize;
const sequelize = db.sequelize;

// const Actor = db["actor"];
// const Movie_cast = db["movie_cast"];
const Movie = db["movie"];
const Reviewer = db["reviewer"];
const Rating = db["rating"];
const Op = Sequelize.Op;

// Object.keys(db).forEach(key => console.log(key, ' ', db[key].associations));

// 1. Write a query in SQL to find the name and year of the movies.
const nameAndYearOfMovies = async () => {
  console.log(
    "1. Write a query in SQL to find the name and year of the movies. "
  );
  const movies = await Movie.findAll({
    attributes: ["mov_title", "mov_year"],
  });
  for (const movie of movies) {
    console.log(
      "Movie Title: ",
      movie.dataValues.mov_title,
      ", Movie_Year: ",
      movie.dataValues.mov_year
    );
  }
};

// 2. Write a query in SQL to find the year when the movie American Beauty released.

const movieYearOfSpecificMovie = async (title = "American Beauty") => {
  console.log(
    "2. Write a query in SQL to find the year when the movie American Beauty released."
  );
  const movies = await Movie.findOne({
    attributes: ["mov_year"],
    where: [{ mov_title: title }],
  });
  console.log("Year: ", movies.dataValues.mov_year);
};

// 3. Write a query in SQL to find the movie which was released in the year 1999.
const moviesReleasedInASpecificYear = async (year = 1999) => {
  console.log(
    "3. Write a query in SQL to find the movie which was released in the year 1999."
  );
  const movies = await Movie.findAll({
    attributes: ["mov_title"],
    where: { mov_year: year },
  });
  for (const movie of movies) {
    console.log("Movie Title: ", movie.dataValues.mov_title);
  }
};

// 4. Write a query in SQL to find the movies which was released before 1998.
const moviesReleasedBeforeASpecificYear = async (year = 1998) => {
  console.log(
    "4. Write a query in SQL to find the movies which was released before 1998."
  );
  const movies = await Movie.findAll({
    attributes: ["mov_title"],
    where: {
      mov_year: {
        [Op.lt]: year,
      },
    },
  });
  for (const movie of movies) {
    console.log("Movie Title: ", movie.dataValues.mov_title);
  }
};

// 5. Write a query in SQL to return the name of all reviewers and name of movies together in a single list.
const nameOfReviewersWithMovies = async () => {
  console.log(
    "5. Write a query in SQL to return the name of all reviewers and name of movies together in a single list."
  );

  const lists = await sequelize.query(
    "SELECT reviewer.rev_name FROM reviewer UNION(SELECT movie.mov_title FROM movie);",
    { type: Sequelize.QueryTypes.SELECT }
  );
  for (const list of lists) {
    console.log("Name: ", list.rev_name);
  }
};

// 6. Write a query in SQL to find the name of all reviewers who have rated 7 or more stars to their rating.

const nameOfReviewersWhoHaveRatedAboveSpecificStars = async (stars = 7) => {
  console.log(
    "6. Write a query in SQL to find the name of all reviewers who have rated 7 or more stars to their rating."
  );

  const reviewers = await Reviewer.findAll({
    attributes: ["rev_name"],
    include: [
      {
        model: Rating,
        where: {
          rev_stars: {
            [Op.gte]: stars,
          },
        },
      },
    ],
    where: {
      rev_name: {
        [Op.not]: null,
      },
    },
    raw: true,
    nest: false,
  });
  for (const reviewer of reviewers) {
    console.log(
      "Reviewer: ",
      reviewer.rev_name,
      ", Rev_stars: ",
      reviewer["ratings.rev_stars"]
    );
  }
};

// 7. Write a query in SQL to find the titles of all movies that have no ratings

const moviesWithNoRatings = async () => {
  console.log(
    "7. Write a query in SQL to find the titles of all movies that have no ratings."
  );
  const movies = await Movie.findAll({
    attributes: ["mov_title"],
    where: Sequelize.literal("mov_id NOT IN(SELECT mov_id FROM Rating)"),
    raw: true,
  });
  for (const movie of movies) {
    console.log(movie);
  }
};

// 8. Write a query in SQL to find the titles of the movies with ID 905, 907, 917.

const findTitlesOfMoviesUsingID = async (ids = [905, 907, 917]) => {
  console.log(
    "8. Write a query in SQL to find the titles of the movies with ID 905, 907, 917."
  );
  const movies = await Movie.findAll({
    attributes: ["mov_title"],
    where: {
      mov_id: {
        [Op.in]: ids,
      },
    },
    raw: true,
  });
  for (const movie of movies) {
    console.log(movie);
  }
};

// 9. Write a query in SQL to find the list of all those movies with year which include the words Boogie Nights.

const moviesThatIncludeSpecificWord = async (word = "Boogie Nights") => {
  console.log(
    "9. Write a query in SQL to find the list of all those movies with year which include the words Boogie Nights. "
  );
  const movies = await Movie.findAll({
    attributes: ["mov_title", "mov_year"],
    where: {
      mov_title: {
        [Op.like]: `%${word}%`,
      },
    },
    raw: true,
  });
  console.log(movies);
};

// 6. Write a query in SQL to find all the years which produced at least one movie and that received a rating of more than 3 stars. Show the results in increasing order.

const countMoviesProducedInAYear = async () => {
  console.log(
    "6. Write a query in SQL to find all the years which produced at least one movie and that received a rating of more than 3 stars. Show the results in increasing order "
  );
  Rating.findAll({
    // attributes: ["rev_stars"],
    attributes: [
      [db.Sequelize.fn("count", db.Sequelize.col("mov_year")), "count"],
    ],
    include: [
      {
        model: Movie,
        required: true,
        attributes: ["mov_year"],
      },
    ],
    where: {
      rev_stars: {
        [Op.gt]: 3,
      },
    },
    raw: true,
    group: ["mov_year"],
    having: {
      count: {
        [Op.gte]: 3,
      },
    },
  })
    .then((ratings) => console.log(ratings))
    .catch((error) => console.error(error));
};

// 8. Write a query in SQL to find the names of all reviewers who have ratings with a NULL value.

const reviewersWithNullRatings = async () => {
  console.log(
    "8. Write a query in SQL to find the names of all reviewers who have ratings with a NULL value."
  );
  Reviewer.findAll({
    attributes: ["rev_name"],
    raw: true,
    include: {
      model: Rating,
      attributes: [],
      where: { rev_stars: null },
    },
  })
    .then((reviewers) => console.log(reviewers))
    .catch((error) => console.error(error));
};

// 9. Write a query in SQL to return the reviewer name, movie title, and stars for those movies which reviewed by a reviewer and must be rated. Sort the result by reviewer name, movie title, and number of stars.

const moviesDescription = async () => {
  Movie.findAll({
    attributes: ["mov_title"],
    raw: true,
    order: ["mov_title"],
    include: {
      model: Rating,
      attributes: ["rev_stars"],
      order: ["rev_stars"],
      required: true,
      raw: true,
      where: {
        rev_stars: {
          [Op.not]: null,
        },
      },
      include: {
        model: Reviewer,
        raw: true,
        attributes: ["rev_name"],
        order: ["rev_name"],
        where: {
          rev_name: {
            [Op.not]: null,
          },
        },
      },
    },
  })
    .then((reviewers) => {
      console.log(reviewers);
    })
    .catch((error) => console.error(error));
};

// 10. Write a query in SQL to find the reviewer's name and the title of the movie for those reviewers who rated more than one movies.

const reviewersWhoRatedMoreThanOneMovies = async () => {
  console.log(
    "10. Write a query in SQL to find the reviewer's name and the title of the movie for those reviewers who rated more than one movies."
  );
  Reviewer.findAll({
    raw: true,
    attributes: ["rev_name"],
    include: {
      model: Rating,
      required: true,
      raw: true,
      attributes: [],
      include: {
        raw: true,
        model: Movie,
        required: true,
        attributes: ["mov_title"],
      },
    },
    group: ["rev_name", "mov_title"],
    having: Sequelize.where(
      Sequelize.fn("count", Sequelize.literal("*")),
      ">=",
      1
    ),
  })
    .then((reviewers) => {
      console.log(reviewers);
    })
    .catch((error) => console.error(error));
};

const main = async () => {
  // await nameAndYearOfMovies();
  // await movieYearOfSpecificMovie();
  // await moviesReleasedInASpecificYear();
  // await moviesReleasedBeforeASpecificYear();
  // await nameOfReviewersWithMovies();
  // await nameOfReviewersWhoHaveRatedAboveSpecificStars();
  //   await moviesWithNoRatings();
  //   await findTitlesOfMoviesUsingID();
  //   await moviesThatIncludeSpecificWord();
  // await countMoviesProducedInAYear();
  // await reviewersWithNullRatings();
  // await moviesDescription();
  await reviewersWhoRatedMoreThanOneMovies();
};

main();
