import './App.css';

function App() {
  const items = [
  {
   name: 'John',
   age: 60
  },
  {
   name: 'Doe',
   age: 20
  },
  {
   name: 'Will',
   age: 40
  },
  {
   name: 'Smith',
   age: 69
  },
  {
   name: 'Mayer',
   age: 56
  }
]
const findingMaxAge = (age) => {
  return age > 20
}
  return (
    <div className="App">
      <header className="App-header">
        <h3>Create function for finding max item from input array which it’s object </h3>
        <ul>
          {items.map((item, index) => (
            findingMaxAge(item.age) ?
            <li key={index}>{item.name} - {item.age} </li>
            :(null)
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
