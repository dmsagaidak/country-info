import React from 'react';
import {CountryData} from "../../types";

interface Props {
  country: CountryData
}

const CountryInfo: React.FC<Props> = ({country}) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p><strong>Capital: </strong>{country.capital}</p>
      <p><strong>Population: </strong>{country.population}</p>
    </div>
  );
};

export default CountryInfo;