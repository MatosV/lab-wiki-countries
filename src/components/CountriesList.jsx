import React from 'react';
import Countries from './../countries.json';

function CountriesList() {
  return (
    <div>
      <ul>
        {Countries.map((country) => {
          return (
            <div>
              <span>{country.flag}</span>
              <span>{country.name.common}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default CountriesList;
