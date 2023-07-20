import React, { useState } from "react";
import "./Search.scss";
const Search = ({ data, setFiltered, setHidePagination }) => {
  const [keyWord, setKeyword] = useState("");
  const handleChange = (e) => {
    setKeyword(e?.target?.value);
    setFiltered(
      data?.filter((ele) =>
        ele.name.toLowerCase()?.includes(e?.target?.value.toLowerCase())
      )
    );
    setHidePagination(e?.target?.value.toLowerCase() === "" ? false : true);
  };

  return (
    <div>
      <input
        className="search"
        placeholder="Search with Name"
        value={keyWord}
        onChange={handleChange}
        type="search"
      />
    </div>
  );
};

export default Search;
