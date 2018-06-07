import React, {Component} from 'react';

class Poll extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <form id="poll">
        <label for="option1">Option 1</label>
        <input type="radio" name="option1" id="option1"/><br/>
        <label for="option2">Option 2</label>
        <input type="radio" name="option2" id="option2"/>
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default Poll;