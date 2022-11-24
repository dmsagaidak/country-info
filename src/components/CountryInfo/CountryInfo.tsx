import React from 'react';
import {CountryData} from "../../types";
import {ApiCountry} from "../../types";

import './CountryInfo.css';

interface Props {
  country: CountryData,
  borders: ApiCountry[]
}


const CountryInfo: React.FC<Props> = ({country,borders}) => {
  let borderingCountries;

  if (borders.length){
    borderingCountries = borders.map(item =>(
      <div>
        <ul>
          <li key={item.alpha3Code}>{item.name}</li>
        </ul>
      </div>
  )
    )
  }else{
    borderingCountries = (
      <div>
        no countries
      </div>
    )
  }


  if(country.name !== '') {
    return (
      <div className="country-cont">
        <img src={country.flag} alt={country.name} className="flag-img"/>
        <p style={{margin: 0}}><strong>Name: </strong>{country.name}</p>
        <p><strong>Capital: </strong>{country.capital}</p>
        <p><strong>Population: </strong>{country.population}</p>
        <div>
          <strong>Has borders with:</strong>
          {borderingCountries}
        </div>
      </div>
    );
  } else {
    return (
      <div className="country-cont">The country is not chosen. Please choose one</div>
    )
  }


};

export default CountryInfo;