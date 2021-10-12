import MovieListItem from "./MovieListItem";
import styled from "styled-components";

const ListWrap = styled.div`
    display:grid;
    grid-gap:50px;
    @media screen and (max-width:760px){
        grid-template-columns:repeat(2, 300px);
    }
`;

function checkEven(num) {
    return num % 2 === 0;
}

const MovieList = ({ movieList }) => {
  return (
    <ListWrap>
      {movieList.map((movie,index) => <MovieListItem {...movie} isEven={checkEven(index)}  />)}
    </ListWrap>
  );
};

export default MovieList;
