import React from 'react';
import Section1 from './Main/Section1';
import Section2 from './Main/Section2';
import Section3 from './Main/Section3';
import Section4 from './Main/Section4';
import Section5 from './Main/Section5';
import "./css/main.css"
function Main() {
  return (
    <main className="Main">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5/>
    </main>
  );
}

export default Main;