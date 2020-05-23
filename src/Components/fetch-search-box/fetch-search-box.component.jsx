import React from 'react';

export const FetchSearchBox = ({ placeholder, handleSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder={placeholder} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
