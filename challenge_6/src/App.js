import './App.css';

function App() {
  const items = [
  {
   name: 'John',
   age: 60,
   salary: 50000,
   children: 3
  },
  {
   name: 'Doe',
   age: 20,
   salary: 30000,
   children: 2
  },
  {
   name: 'Will',
   age: 40,
   salary: 20000,
   children: 1
  },
  {
   name: 'Smith',
   age: 69,
   salary: 25000,
   children: 0
  },
  {
   name: 'Mayer',
   age: 56,
   salary: 60000,
   children: 1
  }
]

const maximum = (items) => {
  console.log(items)
}
  return (
    <div className="App">
      <header className="App-header">
        <h3>Create function for finding max item from input array which it’s object by specified property which user can provide by themself</h3>
        <p>find max by age</p>
        {maximum(items,(person) => person.age)}
        <p>find max by salary</p>
        {/* {maximum(items,(person) => person.salary)} */}
        <p>find max by children</p>
        {/* {maximum(items,(person) => person.children)} */}
      </header>
    </div>
  );
}

export default App;
