import React from 'react';

import Header from "./Header";
import Lead from './Lead';
import Design from './Design';
import Sound from './Sound';
import Alisa from './Alisa';
import SmartHome from './SmartHome';
import Purchase from './Purchase';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Lead />
        <Design />
        <Sound />
        <Alisa />
        <SmartHome />
        <Purchase />
      </main>
      <Footer />
    </div>
  );
}

export default App;