import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Quiz from './Quiz';

function generateRandom(allData) {

  let arr = [];
  while(arr.length < 4){
      var r = Math.floor(Math.random() * 249) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  let returnArr = [];
  for (let i=0; i<arr.length; i++) {
      returnArr.push(allData[arr[i]]);
  }

  return returnArr;
}


function App() {

  const [ allCountries, setAllCountries ] = useState([]);
  const [ isFront, setIsFront ] = useState(true);
  const [ fourCountries, setFourCountries ] = useState([]);

  useEffect(() => {
    axios('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const allData = res.data.map(i => i["alpha2Code"]);
        console.log(allData)
        setAllCountries(allData)
        setFourCountries(generateRandom(allData))
      })
  }, [])
  // setFourCountries(generateRandom(allCountries))
  console.log('fourCountries from app.js', fourCountries)

  return (
    <div className="App">
      <h2>Country Quiz</h2>
      { isFront ? <button onClick={()=>setIsFront(false)}>Start quiz!</button> : <Quiz fourCountries={fourCountries} />}
      {/* <Quiz fourCountries={fourCountries} /> */}
      <button onClick={() => setFourCountries(generateRandom(allCountries))}>next</button>
    </div>
  );
}

export default App;
