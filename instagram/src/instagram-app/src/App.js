import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      dummyData,
    }
  }

  render() {
    return (
      <div className='App'>
      <div className='Header'>
      <SearchBar />
      </div>
      </div>
    )
  }
}

export default App;
