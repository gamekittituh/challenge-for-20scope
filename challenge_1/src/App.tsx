import React from 'react';
import { ScreenHeader } from './components/ScreenHeader/Index';
const list = 10
function App() {
  return (
    <>
      <div>
        <ScreenHeader title="...weil's mit uns besser geht ." />
      </div>
      <div className="container mx-auto">
          {[...Array(list)].map((map, index) => (
            <h1 key={index}>Hello World</h1>
          ))}
      </div>
      </>
  );
}

export default App;
