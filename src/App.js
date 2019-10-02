import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import StudentList from './Components/StudentList';
import { Router } from "@reach/router"

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Router>
        <StudentList path='/' />
      </Router>
    </>
  );
}

export default App;
