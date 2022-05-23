import React from 'react';
const list = 1000
function App() {
  return (
    <div className="container mx-auto">
      <div className="h-14 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
      { 
        [...Array(list)].map((map, index) => (
          <h1 key={index}>Hello World</h1>
          ))
        }
    </div>
  );
}

export default App;
