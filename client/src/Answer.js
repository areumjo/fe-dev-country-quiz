import React, { useState } from 'react';

const Answer = (props) => {

    const { name, capital, correctAnswer } = props;
    const [ answerClassName, setAnswerClassName ] = useState("answer");

    const handleClickAnswer = () => {
        console.log('clicked', capital, name)
        if (capital === correctAnswer["capital"]) {
            setAnswerClassName("correct-answer");
        } else {
            setAnswerClassName("wrong-answer");
        }
        // setIsNextOn(true);
    }

    return (
        <p className={answerClassName} onClick={handleClickAnswer}>{name}</p>
    )
}

export default Answer;