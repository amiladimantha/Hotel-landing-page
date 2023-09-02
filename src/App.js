import React from 'react';
import { Header, Experience, Offers, Footer, Destinations } from './containers';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Destinations />
      <Experience />
      <Offers />
      <Footer />
    </div>
  )
}

export default App