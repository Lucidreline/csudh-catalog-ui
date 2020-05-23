import React from 'react';

export const FilterSearchBox = props => (
  <div className="search-box">
    <input
      type="search"
      placeholder={props.placeholder}
      onChange={props.handleChange}
    />
  </div>
);
