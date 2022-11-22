import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {ApiCountry} from "../../types";



const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

const SelectCountry = () => {
  const [countries, setCountries] = useState<ApiCountry[]>([]);

  const fetchCountry = useCallback(async () => {
    const countryResponse = await axios.get<ApiCountry[]>(COUNTRIES_URL);
    setCountries(countryResponse.data)

  }, []);

  useEffect(() =>{
    fetchCountry().catch(console.error);
  }, [fetchCountry])

  return (
    <div>
      <select>
        <option selected disabled value=''>Select a country</option>
        {countries.map(country => (
          <option
          key={country.alpha3Code}
          value={country.name}
          >{country.name}</option>
          ))}
      </select>
    </div>
  );
};

export default SelectCountry;