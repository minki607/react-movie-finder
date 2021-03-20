import { Input } from "semantic-ui-react";
import { searchForm } from "./SearchForm.module.scss";
import { a11yHidden } from "../../styles/modules/common.module.scss";

const SearchForm = ({ handleChange, handleSubmit, query }) => {
  return (
    <form className={searchForm} onSubmit={handleSubmit}>
      <fieldset>
        <legend className={a11yHidden}>영화 검색 폼</legend>
        <Input
          value={query}
          onChange={handleChange}
          placeholder="검색..."
          icon="search"
        ></Input>
      </fieldset>
    </form>
  );
};

export default SearchForm;
