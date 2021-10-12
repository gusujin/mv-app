import React from "react";
import MovieList from "../components/MovieList";

const data = [
  {
    poster:"https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
    title: "Doctor Who The Day of the Doctor",
    year: 2013,
    genres: ["Action", "Adventure", "Drama"],
    summary:"In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
  },
  {
    poster:"https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
    title: "Doctor Who The Day of the Doctor",
    year: 2013,
    genres: [ "Adventure", "Drama"],
    summary:"In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
  },
  {
    poster:"https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
    title: "Doctor Who The Day of the Doctor",
    year: 2013,
    genres: ["Action", "Adventure", "Drama"],
    summary:"In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
  },
  {
    poster:"https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
    title: "Doctor Who The Day of the Doctor",
    year: 2013,
    genres: ["Action", "Adventure", "Drama"],
    summary:"In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
  },
  {
    poster:"https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
    title: "Doctor Who The Day of the Doctor",
    year: 2013,
    genres: ["Action", "Adventure", "Drama"],
    summary:"In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
  },
];

export default {
  title: "MovieList/MovieList",
  component: MovieList,
};

const Template = () => <MovieList movieList={data} />;

export const Default = Template.bind({});
Default.storyName = "MovieList";
