import React from 'react';
import './styles/styles.scss';
import Router from './Routes/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
