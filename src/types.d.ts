export interface ApiCountry {
  name: string;
  alpha3Code: string;
}

export interface CountryData {
  name: string;
  alpha3Code: string;
  capital: string;
  population: number;
  flag: string;
  borders: [];
}