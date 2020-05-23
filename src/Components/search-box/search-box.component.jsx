import React from 'react';

export const SearchBox = props => (
  <div className="search-box">
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  </div>
);
