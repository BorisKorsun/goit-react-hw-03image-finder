import React, { Component } from 'react';

import { AppContainer } from './App.styled';

import Searchbar from 'components/Searchbar';

class App extends Component {
  state = {
    queryName: '',
  };

  handleFormSubmit = (values, actions) => {
    console.log(values)
    console.log(actions)
  }

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handleFormSubmit}/>
      </AppContainer>
    );
  }
}

export default App;
