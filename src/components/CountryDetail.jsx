import React from 'react';

function CountryDetail(props) {
  return (
  <div>
    <span>{props.match.params.name.common}</span>
    <span>Capital: {props.match.params.name.capital}</span>
    <span>Area: {props.match.params.name.area}</span>
    <span>Borders: {props.match.params.name.borders}</span>
  </div>);
}

export default CountryDetail;
