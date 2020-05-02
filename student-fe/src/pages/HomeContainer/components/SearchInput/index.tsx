import React, { FC } from 'react';
import { Input } from 'antd';
import { SearchInputProps } from '@src/pages/HomeContainer/components/SearchInput/interface';

const { Search } = Input;

const SearchInput: FC<SearchInputProps> = props => {
  return (
    <Search
      allowClear
      style={{ marginBottom: '15px' }}
      onSearch={searchValue => {
        console.log('searchValue', searchValue);
        props.getListEffect({
          query: searchValue,
        });
      }}
      placeholder="按 学号、姓名 搜索"
    />
  );
};

export default SearchInput;
