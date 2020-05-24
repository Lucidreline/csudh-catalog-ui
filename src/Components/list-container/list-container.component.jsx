import React from 'react';

import { ListItem } from '../list-item/list-item.component';

export const ListContainer = props => (
  <div className="list-container">
    <ListItem
      key={-1}
      course={{ name: 'Name', number: 'Number', credits: 'Credits' }}
    ></ListItem>
    <hr />
    {props.courses.map(course => (
      <ListItem key={course.id} course={course}></ListItem>
    ))}
  </div>
);
