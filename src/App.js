import React from 'react';
import './App.css';
import Header from './Components/Header';
import Nav from './Components/Nav';
import StudentList from './Components/StudentList';
import { Router } from "@reach/router"
import Info from './Components/HomepageInfo';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Router>
        <Info path='/' />
        <StudentList path='/students' />
      </Router>
    </>
  );
}

export default App;
