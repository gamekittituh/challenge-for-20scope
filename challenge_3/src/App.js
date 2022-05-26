import './App.css';
import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }))
  }

  
  
  render(){
      return (
        <div className="App">
        <header className="App-header">
          <h3>Create function for sorting array</h3>
          <List items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-todo"
              type="number"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Add
            </button>
          </form>
        </header>
      </div>
    );
  }
}

const List = (props) => {

  const sortArr = (arr) => {
    if(arr.length > 0){
        for(const i in arr){
          for(const j in arr){
            if(Number(arr[i].text) < Number(arr[j].text)){
                const temp = arr[i].text
                arr[i].text = arr[j].text
                arr[j].text = temp
            }
          }
        }
      return arr
    }else{
      return []
    }
  }
    return (
      <ul>
        {props.items.length > 0 ? sortArr(props.items).map((item, index) => (
            <li key={index}>{item.text}</li>
          )) : null
        }
      </ul>
    );
}

export default App;
