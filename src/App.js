import React, { Component } from 'react';

const InputForm = require('./InputForm')
const ListItems = require('./ListItems')
const EditComponent = require('./EditComponent')

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputForm />
        <ListItems />
        <EditComponent itemIndex="1" />
      </div>
    );
  }
}

export default App;
