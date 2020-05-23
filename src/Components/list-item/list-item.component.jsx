import React from 'react';

export const ListItem = props => (
  <div className="list-item">
    <h1>{props.course.name}</h1>
    <p>{props.course.number}</p>
  </div>
);
