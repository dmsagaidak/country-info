import React, {useCallback, useEffect, useState} from 'react';
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import axios from 'axios';
import {ApiCountry, CountryData} from "../../types";
import './App.css';

const BASE_URL = 'https://restcountries.com/v2/';
const COUNTRY_URL = 'name/';

function App() {
  const [country, setCountry] = useState<CountryData>({
    name: '',
    alpha3Code: '',
    capital: '',
    population: 0,
    flags: {},
    borders: []
  })

  const [chosenCountry, setChosenCountry] = useState("");

  const fetchData = async (name: string) =>{
    console.log("Setting country to "+name)
    setChosenCountry(name)
    const countryResponse = await axios.get<CountryData>(BASE_URL + COUNTRY_URL + name);
    console.log(countryResponse.data)
  }


  useEffect(() => {

  }, []);



  return (
    <div className="App">
      <SelectCountry
        name={chosenCountry}
        onSelect={(s: string) => fetchData(s)}/>
      <CountryInfo
        country={country}
      />
    </div>
  );
}

export default App;