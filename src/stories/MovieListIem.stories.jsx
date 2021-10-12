import React from "react";

import MovieListItem from "../components/MovieListItem";

export default {
  title: "MovieList/MovieListItem",
  component: MovieListItem,
  argTypes: {
    poster: {
      defaultValue:
        "https://yts.mx/assets/images/movies/doctor_who_the_day_of_the_doctor_2013/medium-cover.jpg",
      control: "text",
    },
    title: {
      defaultValue: "Doctor Who The Day of the Doctor",
      control: "text",
    },
    year: {
      defaultValue: 2013,
      control: "number",
    },
    genres: {
      defaultValue: ["Action", "Adventure", "Drama"],
      control: "array",
    },
    summary: {
      defaultValue:
        "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion.",
      control: "text",
    },
  },
};

const Template = (args) => <MovieListItem {...args} />;

export const Default = Template.bind({});
Default.storyName = "MovieListItem";
Default.parameters = {
  docs: {
    source: {
      code: `
<div>
  <MovieListItem {...args} />;
</div>
      `,
    },
  },
};
