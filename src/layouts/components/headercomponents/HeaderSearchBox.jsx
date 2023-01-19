import { Input } from "antd";
import React from "react";
import { headerHeight } from "../Header";

const { Search } = Input;
const SearchBox = () => {
  const onSearch = (value) => {};
  return (
    <Search
      size="large"
      placeholder="Search Jsask"
      allowClear
      onSearch={onSearch}
      style={{
        float: "left",
        height: headerHeight,
        padding: "10px 0px",
      }}
    />
  );
};

export default SearchBox;
