import React from "react";
import style from "../css/Search.module.css";

function SearchBtn({ inputRef }) {
  return (
    <div className={style.searchContainer}>
      <input ref={inputRef} type="text" placeholder="Search" />
    </div>
  );
}

export default SearchBtn;
