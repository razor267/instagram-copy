import React, { useState } from "react";
import Search from "../../assets/images/search.png";
import s from "./searchInput.module.css";
import SearchResult from "../searchResult/SearchResult";

const SearchInput = () => {
  let [search, setSearch] = useState(false);
  const searchActive = () => {
    setSearch(true);
  };
  const searchDective = () => {
    setSearch(false);
  };

  return (
    <div className={s.search} onClick={searchActive}>
      {!search ? (
        <div className={s.label}>
          <img className={s.img} src={Search} alt="" width="16" />
          Поиск
        </div>
      ) : (
        <div onBlur={searchDective}>
          <input
            className={s.input}
            type="text"
            placeholder="Поиск"
            autoFocus={true}
          />
          <SearchResult />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
