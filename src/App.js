import React from 'react';

import './App.css';

import { FetchSearchBox } from './Components/fetch-search-box/fetch-search-box.component';
import { FilterSearchBox } from './Components/filter-search-box/filter-search-box.component';
import { ListContainer } from './Components/list-container/list-container.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [],
      successfulFetch: false,
      searchedYet: false,
      courseSearchField: '',
    };
  }

  handleSearchChange = e => {
    this.setState({ courseSearchField: e.target.value });
  };

  handleCatalogLookup = e => {
    const url = e.target.querySelector('input').value;
    fetch(`https://catalogapi.manuelc.me/?url=${url}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          this.setState({
            successfulFetch: true,
            courses: json.courses,
            searchedYet: true,
          });
        } else {
          this.setState({ successfulFetch: false, searchedYet: true });
        }
      });

    e.preventDefault(); // stops the page from refreshing when the form is submitted
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

  decideCoursesSection = () => {
    if (!this.state.searchedYet) {
      return <h1>Enter the catalog's URL in the top search box</h1>;
    } else if (this.state.successfulFetch) {
      const filteredCourses = this.state.courses.filter(this.filtererCourses);
      return <ListContainer courses={filteredCourses} />;
    } else {
      return <h1>Please enter a valid catalog URL</h1>;
    }
  };

  render() {
    const coursesSection = this.decideCoursesSection();

    return (
      <div className="App">
        <h1>Catalog</h1>
        <FetchSearchBox
          placeholder="Catalog URL"
          handleSubmit={this.handleCatalogLookup}
        />
        <FilterSearchBox
          placeholder="Look for a course"
          handleChange={this.handleSearchChange}
        />
        {coursesSection}
      </div>
    );
  }
}

export default App;
