import React from 'react';

import './App.css';

import { SearchBox } from './Components/search-box/search-box.component';
import { ListContainer } from './Components/list-container/list-container.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      courseSearchField: '',
    };
  }

  componentDidMount() {
    fetch(
      'https://catalogapi.manuelc.me/?url=http://csudh.smartcatalogiq.com/en/2020-2021/Catalog/Copy-of-Computer-Science/Bachelor-of-Science-in-Computer-Science'
    )
      .then(res => res.json())
      //.then(courses => console.log(courses));
      .then(json => this.setState({ courses: json.courses }));
  }

  handleSearchChange = e => {
    this.setState({ courseSearchField: e.target.value });
  };

  filtererCourses = course => {
    let nameMatch = course.name
      .toLowerCase()
      .includes(this.state.courseSearchField.toLowerCase());

    let numberMatch = course.number
      .toLowerCase()
      .includes(this.state.courseSearchField.toLowerCase());

    if (nameMatch || numberMatch) return true;
  };

  render() {
    const filteredCourses = this.state.courses.filter(this.filtererCourses);
    return (
      <div className="App">
        <h1>Catelog</h1>
        <SearchBox
          placeholder="Look for a course"
          handleChange={this.handleSearchChange}
        />
        <ListContainer courses={filteredCourses} />
      </div>
    );
  }
}

export default App;
