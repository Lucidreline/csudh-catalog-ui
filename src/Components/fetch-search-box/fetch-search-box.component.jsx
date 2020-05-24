import React from 'react';

import './fetch-search-box.styles.css';

export const FetchSearchBox = ({ placeholder, handleSubmit }) => {
  return (
    <div className="fetch-search">
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder={placeholder} />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
};
