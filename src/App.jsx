import React, { Component, Fragment } from 'react';
import Header from './component/Layout/header';
import Meals from './component/Meals/meals';
import "./App.css"


function App() {
  return <Fragment >
    <div className="container-fluid  appHolder">
    <Header/>
    <Meals/>
    </div>
  </Fragment>
}

export default App