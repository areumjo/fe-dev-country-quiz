import React, { useEffect, useState } from 'react';

const Answer = (props) => {

    const { name, capital, correctAnswer, setIsNextOn, correctNumber, setCorrectNumber, isDisabled, setIsDisabled } = props;

    const [ answerColor, setAnswerColor ] = useState("");

    const handleClickAnswer = () => {
        console.log('clicked', capital, name)
        setIsNextOn(true);
        setIsDisabled(true);
        if (capital === correctAnswer["capital"]) {
            setAnswerColor("correct-answer");
            setCorrectNumber(correctNumber+1);
        } else {
            setAnswerColor("wrong-answer");
            // add feature showing right answer
        }
    }

    useEffect(() => {
        setAnswerColor("answer")
    }, [correctAnswer])

    return (
        <>
            <button key={name} className={answerColor} onClick={handleClickAnswer} disabled={isDisabled}>{name}</button>
        </>
    )
}

export default Answer;