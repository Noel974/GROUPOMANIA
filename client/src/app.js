import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/_index.scss';
import Router from './Routes/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>

  );
}

export default App;