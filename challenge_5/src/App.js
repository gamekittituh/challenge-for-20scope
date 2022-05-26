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
  return (
    <div className="App">
      <header className="App-header">
        <h3>Create function for sorting item from input array which it’s object by age </h3>
        <ul>
          {items.sort((a, b) => b.age - a.age).map((item, index) => (
            <li key={index}>{item.name} - {item.age}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
