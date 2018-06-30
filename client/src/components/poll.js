import React, {Component} from 'react';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'tst',
      pollData: {
        title: 'Favorite Color',
        options: ["Blue", "Orange", "Green", "Red", "Black"]
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('option submitted: ' + this.state.value);
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    let options = this.state.pollData.options.map(option => {
      return(
        <div>
          <label>{option}</label>
          <input type="radio" name="options" value={option} onChange={this.handleChange}/>
        </div>
      );
    });
    return(
      <form id="poll" onSubmit={this.handleSubmit}>
        {options}
        <button type="submit">Submit</button>
      </form>
    );
  }
};

export default Poll;