function movies(input) {
    let movies = [];

    for (let command of input) {
        let movie = {};

        if (command.includes("addMovie")) {
            let elements = command.split("addMovie ");
            let movieName = elements[1];
            movie.name = movieName;
            movies.push(movie);
        }

        if (command.includes("directedBy")) {
            let elements = command.split(" directedBy ");
            let movieName = elements[0];
            let movieDirector = elements[1];

            let movieFound = movies.find((m) => m.name === movieName);

            if (movieFound) {
                movieFound.director = movieDirector;
            }
        }

        if (command.includes("onDate")) {
            let elements = command.split(" onDate ");
            let movieName = elements[0];
            let movieDate = elements[1];

            let movieFound = movies.find((m) => m.name === movieName);

            if (movieFound) {
                movieFound.date = movieDate;
            }
        }
    }

    for (let movie of movies) {
        if (Object.keys(movie).includes("name" && "date" && "director")) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([
    "addMovie The Avengers",
    "addMovie Superman",
    "The Avengers directedBy Anthony Russo",
    "The Avengers onDate 30.07.2010",
    "Captain America onDate 30.07.2010",
    "Captain America directedBy Joe Russo",
]);
