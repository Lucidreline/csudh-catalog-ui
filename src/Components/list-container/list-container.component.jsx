import React from 'react';

import { ListItem } from '../list-item/list-item.component';

export const ListContainer = props => (
  <div className="list-container">
    {props.courses.map(course => (
      <ListItem key={course.id} course={course}></ListItem>
    ))}
  </div>
);
