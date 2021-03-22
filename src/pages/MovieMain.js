import React, { useState, useRef } from "react";
import MovieList from "components/MovieList/MovieList";
import SearchForm from "components/SearchForm/SearchForm";
import { ReactComponent as Loader } from "../assets/loader.svg";
import { movieMain } from "./MovieMain.module.scss";
import MessageDisplay from "components/MessageDisplay/MessageDisplay";
import { useFetch } from "../hooks/hooks";

const MovieMain = () => {
  const [response, error, isLoading, fetchData] = useFetch(
    "https://yts.mx/api/v2/list_movies.json"
  );
  const [query, setQuery] = useState("");
  const prevQuery = useRef();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
    fetchData(`?query_term=${query}`);
    prevQuery.current = query;
  };

  const renderMovieList = () => {
    if (isLoading) {
      return <Loader />;
    } else if (error) {
      return (
        <MessageDisplay warning icon="warning" header="오류 발생">
          영화 목록을 가져오는데 오류가 발생하였습니다. 다시 한번 시도해주세요
        </MessageDisplay>
      );
    } else {
      return response?.data.movies ? (
        <MovieList movies={response.data.movies} query={query} />
      ) : (
        <MessageDisplay info icon="question" header="검색 결과 없음">
          {prevQuery.current}(으)로 검색한 결과가 없습니다.
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
