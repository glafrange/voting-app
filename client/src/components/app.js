import React, {Component} from 'react';
import Poll from './poll';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Voting App</h1>
        <Poll />
      </div>
    );
  };
}

export default App;