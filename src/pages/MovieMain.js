import React, { useState, useEffect } from "react";
import MovieList from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { movieMain } from "./MovieMain.module.scss";
import MessageDisplay from "components/MessageDisplay/MessageDisplay";

const fetchMovies = (url, setState, setLoading, setError) => {
  fetch(url)
    .then((res) => res.json())
    .then(({ data: { movies } }) => setState(movies))
    .catch((err) => setError(err))
    .finally(() => setLoading(false));
};

const MovieMain = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchMovies(
      `https://yts.mx/api/v2/list_movies.json`,
      setMovies,
      setLoading,
      setError
    );
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    setLoading(true);
    fetchMovies(
      `https://yts.mx/api/v2/list_movies.json?query_term=${query}`,
      setMovies,
      setLoading,
      setError
    );
  };

  const renderMovieList = () => {
    if (loading) {
      return <Loader />;
    } else if (error) {
      return (
        <MessageDisplay warning icon="warning" header="오류 발생">
          영화 목록을 가져오는데 오류가 발생하였습니다. 다시 한번 시도해주세요
        </MessageDisplay>
      );
    } else {
      return movies ? (
        <MovieList movies={movies} query={query} />
      ) : (
        <MessageDisplay info icon="question" header="검색 결과 없음">
          {query}(으)로 검색한 결과가 없습니다.
        </MessageDisplay>
      );
    }
  };

  return (
    <main className={movieMain}>
      <SearchForm
        query={query}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
      {renderMovieList()}
    </main>
  );
};

export default MovieMain;
