import React from 'react';
import Section1 from './Main/Section1';
import Section2 from './Main/Section2';
import "./css/main.css"
function Main() {
  return (
    <main className="Main">
          <Section1 />
          <Section2/>
    </main>
  );
}

export default Main;