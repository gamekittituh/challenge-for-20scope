import React from 'react';
import { Contact } from './components/Contact/Index';
import { Content } from './components/Content/Index';
import { Partner } from './components/Partner/Index';
import { ScreenHeader } from './components/ScreenHeader/Index';
import { Section } from './components/Section/Index';


function App() {
  return (
    <>
      <div>
        <ScreenHeader title="...weil's mit uns besser geht ." />
      </div>
      <div className="container mx-auto">
          <Content/>
          <Section/>
          <Partner/>
      </div>
      <Contact/>
      </>
  );
}

export default App;
