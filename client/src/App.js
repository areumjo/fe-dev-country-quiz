import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';
import Quiz from './Quiz';

function generateRandom() {
  let arr = [];
  while(arr.length < 4){
      var r = Math.floor(Math.random() * 249) + 1;
      if(arr.indexOf(r) === -1) arr.push(r);
  }
  return arr;
}

function App() {

  const [ allCountries, setAllCountries ] = useState([]);
  const [ isFront, setIsFront ] = useState(true);
  const [ fourCountries, setFourCountries ] = useState([]);
  const [ isNextOn, setIsNextOn ] = useState(false);

  useEffect(() => {
    axios('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const allData = res.data;
        let randomNumberArr = generateRandom();
        console.log(allData[randomNumberArr[0]])
        let fourArr = [];
        for (let i=0; i<randomNumberArr.length; i++) {
          fourArr.push(allData[randomNumberArr[i]]);
        }
        setAllCountries(allData);
        setFourCountries(fourArr);
      })
  }, [])
  // setFourCountries(generateRandom(allCountries))
  // console.log('fourCountries from app.js', fourCountries)

  const handleClickNext = () => {
    let randomNumberArr = generateRandom();
    let fourArr = [];
    for (let i=0; i<randomNumberArr.length; i++) {
      fourArr.push(allCountries[randomNumberArr[i]]);
    }
    setFourCountries(fourArr);
    console.log('next clicked', fourCountries);
  }

  return (
    <div className="App">
      <h2>Country Quiz</h2>
      { isFront ? <button onClick={()=>setIsFront(false)}>Start quiz!</button> : <Quiz fourCountries={fourCountries} handleClickNext={handleClickNext} isNextOn={isNextOn} setIsNextOn={setIsFront}/>}
      {/* <button onClick={handleClickNext} className="next-button">next</button> */}
    </div>
  );
}

export default App;
