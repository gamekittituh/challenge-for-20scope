import './App.css';
import React, { useState } from 'react'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], number: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ number: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.number.length === 0) {
      return alert('Please enter a number');
    }
    const newItem = {
      number: this.state.number,
      id: Date.now()
    };

    const maxNumber = this.state.items.concat(newItem).reduce((prev, next) => {
      return prev.number > next.number ? prev : next
    })
    console.log(maxNumber)

    this.setState(state => ({
      // items: state.items.concat(newItem),
      items: state.items.concat(maxNumber),
      number: ''
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        <h3>Create function for finding max item from input array </h3>
          <List items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-todo"
              type="number"
              onChange={this.handleChange}
              value={this.state.number}
            />
            <button>
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.sort((a,b) => {return b.number - a.number}).map((item, index) => (
          <li key={index}>{item.number}</li>
        ))}
      </ul>
    );
  }
}


export default App;
