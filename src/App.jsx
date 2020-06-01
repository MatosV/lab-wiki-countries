import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';

import CountriesList from './components/CountriesList';
import CountryDetail from './components/CountryDetail';

import data from './countries.json';

function App() {
  return (
    <div className="App">
      <h1>WikiCountries</h1>
      <BrowserRouter>
        <nav>
          <CountriesList />
        </nav>
        <Switch>
          <Route
            path="/countryDetail/:name"
            render={(props) => <CountryDetail {...props} />}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
