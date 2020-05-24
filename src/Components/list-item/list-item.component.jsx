import React from 'react';

import './list-item.styles.css';

export const ListItem = props => (
  <div className="list-item">
    <h3 className="number">{props.course.number}</h3>
    <h3 className="name">{props.course.name}</h3>
    <h3 className="credits">{props.course.credits}</h3>
  </div>
);
