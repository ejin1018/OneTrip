import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchPage(){
  return(
    <>
      <Search placeholder="input search text" enterButton />
      <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
      />
    </>
  )
}

export default SearchPage;