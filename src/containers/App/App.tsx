import React from 'react';
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import './App.css';

function App() {


  return (
    <div className="App">
      <SelectCountry/>
      <CountryInfo/>
    </div>
  );
}

export default App;
