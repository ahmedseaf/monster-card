import React from 'react';

import './search-box-style.css';

export const SearchBox = ({placeholder, handleOnChange}) => (
    <input className="search-box" type="search" placeholder={placeholder}  onChange={ handleOnChange } />
);