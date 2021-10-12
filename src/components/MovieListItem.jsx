import PropTypes from "prop-types";
import styled from "styled-components";

const MovieListItemWrapper = styled.div`
  border-radius: 10px;
  box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  overflow: hidden;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    max-width: 300px;
  }
`;
const MovieImg = styled.div`
  img {
    height: 100%;
  }
  @media screen and (max-width: 760px) {
    img {
      width: 100%;
      height: auto;
    }
  }
`;
const MovieListItemInfo = styled.div`
  padding: 30px;
  box-sizing: border-box;
`;
const MovieTitle = styled.h3`
  font-size: 36px;
  color: ${(props) => props.textColor};
  margin: 0;
`;
const MovieDesc = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 30px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: start;
  }
`;
const MovieYear = styled.p`
  color: #525252;
  margin: 0;
  font-size: 16px;
`;
const MovieGenres = styled.ul`
  display: flex;
  list-style: none;
  color: #525252;
  margin: 0;
  align-items: center;
  @media screen and (max-width: 760px) {
    margin-top: 20px;
    padding-left: 0;
  }
`;
const MovieGenre = styled.li`
  font-size: 16px;
  margin-bottom: 0;
  &:not(:last-child):after {
    content: "";
    display: inline-block;
    width: 1px;
    height: 10px;
    background: #525252;
    margin: 0 10px;
  }
  @media screen and (max-width: 760px) {
    &:not(:last-child):after {
      margin: 0 5px;
    }
  }
`;
const MovieSummary = styled.p`
  color: #525252;
`;

const MovieListItem = ({ title, year, summary, poster, genres, isEven }) => {
  return (
    <MovieListItemWrapper>
      {isEven ? (
        <>
      <MovieImg>
        <img src={poster} alt={title} title={title} />
      </MovieImg>
      <MovieListItemInfo>
        <MovieTitle
          textColor={
            genres.find((genre) => genre === "Action") ? "red" : "yellow"
          }
        >
          {title}
        </MovieTitle>
        <MovieDesc>
          <MovieYear>{year}</MovieYear>
          <MovieGenres>
            {genres.map((genre, index) => {
              return <MovieGenre key={index}>{genre}</MovieGenre>;
            })}
          </MovieGenres>
        </MovieDesc>
        <MovieSummary>{summary}</MovieSummary>
      </MovieListItemInfo>
      </>
      ): (
        <>
      <MovieListItemInfo>
        <MovieTitle
          textColor={
            genres.find((genre) => genre === "Action") ? "red" : "yellow"
          }
        >
          {title}
        </MovieTitle>
        <MovieDesc>
          <MovieYear>{year}</MovieYear>
          <MovieGenres>
            {genres.map((genre, index) => {
              return <MovieGenre key={index}>{genre}</MovieGenre>;
            })}
          </MovieGenres>
        </MovieDesc>
        <MovieSummary>{summary}</MovieSummary>
      </MovieListItemInfo>
      <MovieImg>
        <img src={poster} alt={title} title={title} />
      </MovieImg>
      </>
      )}
    </MovieListItemWrapper>
  );
};

MovieListItem.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieListItem;
