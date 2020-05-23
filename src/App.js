import React from 'react';

import './App.css';

import { ListContainer } from './Components/list-container/list-container.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      courses: [],
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

  render() {
    return (
      <div className="App">
        <h1>Catelog</h1>
        <ListContainer courses={this.state.courses} />
      </div>
    );
  }
}

export default App;
