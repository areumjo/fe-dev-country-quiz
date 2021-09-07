import { useState, useEffect } from 'react';
import axios from 'axios';

import background from './bgimg.jpg';
import adventure from './adventure.svg';
import './App.css';
import Quiz from './Quiz';
import Result from './Result';

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
  const [ quizNumber, setQuizNumber ] = useState(1); // how many quiz : 5
  const [ correctNumber, setCorrectNumber] = useState(0);
  const [ isResultOn, setIsResultOn ] = useState(false);

  useEffect(() => {
    axios('https://restcountries.eu/rest/v2/all')
      .then(res => {
        const allData = res.data;
        let randomNumberArr = generateRandom();
        let fourArr = [];
        for (let i=0; i<randomNumberArr.length; i++) {
          fourArr.push(allData[randomNumberArr[i]]);
        }
        setAllCountries(allData);
        setFourCountries(fourArr);
      })
  }, [])

  const handleClickNext = () => {
    let randomNumberArr = generateRandom();
    let fourArr = [];
    for (let i=0; i<randomNumberArr.length; i++) {
      fourArr.push(allCountries[randomNumberArr[i]]);
    }
    setFourCountries(fourArr);
    setQuizNumber(quizNumber+1);
    console.log(quizNumber)
    if (quizNumber === 5) {
      setIsResultOn(true);
    }
  }
  console.log('quiz, corect', quizNumber, correctNumber)
  return (
    <div className="App" style={{backgroundImage: `url(${background})`, backgroundSize: '100vw', backgroundRepeat: 'no-repeat'}}>
      <h2 className="title">Country Quiz</h2>
      { isFront ? <div className="quiz-box"><img src={adventure} alt="Adventure"/><button onClick={()=>setIsFront(false)} className="start-quiz-button">Start quiz!</button></div> :
        isResultOn ? <Result setQuizNumber={setQuizNumber} setIsResultOn={setIsResultOn} correctNumber={correctNumber} setCorrectNumber={setCorrectNumber}/> :
        <Quiz fourCountries={fourCountries} handleClickNext={handleClickNext} isNextOn={isNextOn} setIsNextOn={setIsNextOn} correctNumber={correctNumber} setCorrectNumber={setCorrectNumber}/>}
      {/* { isResultOn && <div>result</div>} */}
    </div>
  );
}

export default App;
