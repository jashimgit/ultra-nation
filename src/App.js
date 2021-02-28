import React, {useState} from "react";
import './App.css';
import Country from './Components/country/Country';


function App() {
  const [countries, setCountries] = useState([]);
  fetch('https://restcountries.eu/rest/v2/all')
  .then(res => res.json())
  .then(data => setCountries(data))  
  return (
    
    <div>
      <ul>
        {
          countries.map(country => <Country country={country}></Country>)
        }
      </ul>
    </div>
  );
}

export default App;
