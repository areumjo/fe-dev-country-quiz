import { useEffect, useState } from "react";
import Answer from "./Answer";

const Quiz = ( props ) => {

    const { fourCountries, handleClickNext, isNextOn, setIsNextOn, correctNumber, setCorrectNumber } = props;

    const [ quizInfo, setQuizInfo ] = useState([]);
    const [ correctAnswer, setCorrectAnswer ] = useState({});
    const [ isDisabled, setIsDisabled ] = useState(false);

    useEffect(() => {
        setQuizInfo(fourCountries);
        setCorrectAnswer(fourCountries[Math.floor(Math.random()*4)]);
        setIsNextOn(false);
        setIsDisabled(false);
    }, [fourCountries]);

    return (
        <div className="quiz-box">
            { correctAnswer && <h3 className="capital-quiz">{correctAnswer["capital"]} is the capital of</h3>}
            { quizInfo && quizInfo.map(i => <Answer key={i.code} name={i.name} capital={i.capital} correctAnswer={correctAnswer} setIsNextOn={setIsNextOn} correctNumber={correctNumber} setCorrectNumber={setCorrectNumber} isDisabled={isDisabled} setIsDisabled={setIsDisabled}/>)}
            {/* <button onClick={handleClickNext} className="next-button">Next</button> */}
            {isNextOn && <button onClick={handleClickNext} className="next-button">Next</button>}
        </div>
    )

}

export default Quiz;