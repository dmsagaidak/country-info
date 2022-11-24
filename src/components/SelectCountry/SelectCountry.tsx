import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";
import {ApiCountry} from "../../types";

const COUNTRIES_URL = 'https://restcountries.com/v2/all?fields=alpha3Code,name';

interface Props {
  name: string;
  onSelect: (name: string) => void
}

const SelectCountry: React.FC<Props> = ({name, onSelect}) => {
  const [countries, setCountries] = useState<ApiCountry[]>([]);
  const [currentCountry, setCurrentCountry] = useState<ApiCountry>({
    name: '',
    alpha3Code: ''
  })

  const options = countries.map(country => (
      <option
        key={country.alpha3Code}
        value={country.name}
      >{country.name}</option>
    ))

  const fetchCountry = useCallback(async () => {
    const countryResponse = await axios.get<ApiCountry[]>(COUNTRIES_URL);
    setCountries(countryResponse.data)

  }, []);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target;
    onSelect(e.target.value);
    setCurrentCountry(prev =>({...prev, [name]: value}));
  }

  useEffect(() =>{
    fetchCountry().catch(console.error);
  }, [fetchCountry]);

  return (
    <div>
      <select
        name={name}
        value={name}
        onChange={onChange}
      >
        <option disabled value=''>Select a country</option>
        {options}
      </select>
    </div>
  );
};

export default SelectCountry;