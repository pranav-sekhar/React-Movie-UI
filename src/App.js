import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import { trending,toprated } from './components/Movierow';
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="Trending Now" movies={trending}/> {/*given in movierowjs*/}
      <Row title="Top Rated" movies={toprated} />
    </div>
  );
}

export default App;
