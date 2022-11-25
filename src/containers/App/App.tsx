import React, {useCallback, useEffect, useState} from 'react';
import SelectCountry from "../../components/SelectCountry/SelectCountry";
import CountryInfo from "../../components/CountryInfo/CountryInfo";
import axios from 'axios';
import {ApiCountry, CountryData} from "../../types";
import './App.css';

const BASE_URL = 'https://restcountries.com/v2/';
const COUNTRY_URL = 'alpha/';

function App() {
  const [fetchCountry, setFetchCountry] = useState<CountryData>({
    name: '',
    alpha3Code: '',
    capital: '',
    population: 0,
    flag: '',
    borders: []
  });

  const [borderCountry, setBorderCountry] = useState<ApiCountry[]>([])

  const fetchData = useCallback( async (name: string) =>{
    const countryResponse = await axios.get<CountryData>(BASE_URL + COUNTRY_URL + name);

    setFetchCountry(countryResponse.data);

    if(countryResponse.data.borders){
      const promises = countryResponse.data.borders.map(async item =>{
        const itemResponse = await axios.get<ApiCountry>(BASE_URL + COUNTRY_URL + item);

        return {
          name: itemResponse.data.name,
          alpha3Code: itemResponse.data.alpha3Code
        }
      });
      const borderingCountries = await Promise.all(promises);
      setBorderCountry(borderingCountries)
    }

  }, [])

  useEffect(() => {

  }, [fetchData]);

  return (
    <div className="App">
      <SelectCountry
        name={'chosenCountry'}
        onSelect={(select: string) => fetchData(select)}/>
      <CountryInfo
        country={fetchCountry}
        borders={borderCountry}
      />
    </div>
  );
}

export default App;