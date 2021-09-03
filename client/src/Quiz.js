import { useEffect, useState } from "react";
import Answer from "./Answer";

const Quiz = ( props ) => {

    const { fourCountries, handleClickNext, isNextOn, setIsNextOn } = props;


    const [ quizInfo, setQuizInfo ] = useState([]);
    const [ correctAnswer, setCorrectAnswer ] = useState({});

    useEffect(() => {
        setQuizInfo(fourCountries);
        setCorrectAnswer(fourCountries[Math.floor(Math.random()*4)]);
    }, [fourCountries]);

    return (
        <div className="quiz-box">
            { correctAnswer && <h3>{correctAnswer["capital"]} is the capital of</h3>}
            { quizInfo && quizInfo.map(i => <Answer key={i.code} name={i.name} capital={i.capital} correctAnswer={correctAnswer} setIsNextOn={setIsNextOn}  />)}
            {/* { quizInfo && quizInfo.map(i => <p key={i.code} className='answer' onClick={(e)=>handleClickAnswer(e)}>{i.name}</p>)} */}
            {/* { correctAnwser && <h3>{correctAnwser["name"]}</h3>} */}
            <button onClick={handleClickNext} className="next-button">Next</button>
        </div>
    )

}

export default Quiz;