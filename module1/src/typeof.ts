const movieName = "Inception";
type MovieName = typeof movieName;
// const newMovieName: MovieName = "Interstellar";

const movie = {
  name: "Inception",
  director: "Christopher Nolan",
  year: 2010,
};
type Movie = typeof movie;
const newMovie: Movie = {
  name: "Interstellar",
  director: "Christopher Nolan",
  year: 2014,
};
// console.log(movie);
// console.log(newMovie);

type DetailsLog = {
  message: string;
  level: "intermediate" | "beginner" | "expert";
};

function logMessage(input: string | number | DetailsLog) {
  //   console.log(input);
  if (typeof input === "string") {
    console.log(input.toUpperCase());
  } else if (typeof input === "number") {
    console.log(input.toFixed(2));
  } else if ("message" in input && "level" in input) {
    console.log(input.message + " " + input.level);
  }
}
logMessage("Hello");
logMessage(52);
logMessage({
  message: "Good Morning",
  level: "beginner",
});
