import React from 'react';
import winner from './winner.svg';

const Result = ( props ) => {

    const { setIsResultOn, setQuizNumber, correctNumber, setCorrectNumber } = props;

    const handleTryAgain = () => {
        setIsResultOn(false)
        setQuizNumber(1)
        setCorrectNumber(0)
    }

    return (
        <div className="quiz-box">
            <img src={winner} alt="winner tropy" />
            <p className="results">Results</p>
            <p>You got {correctNumber} correct answers!</p>
            <button className="try-again-button" onClick={handleTryAgain}>Try again</button>
        </div>
    )
}

export default Result;