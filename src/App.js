import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from './component/Header'
import Body from './component/Body'
import Table from './component/Table'
import Footer from './component/Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h4 class="font-weight-bold text-center">
          BELAJAR REACT
        </h4>
        <Body />
        <Table/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
