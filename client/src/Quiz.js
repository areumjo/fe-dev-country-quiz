import { useState, useEffect } from "react";
import axios from "axios";


const Quiz = ( props ) => {

    const { fourCountries } = props;

    console.log('fourCountries from quiz.js', fourCountries)

    const [ quizInfo, setQuizInfo ] = useState([]);
    const [ correctAnwser, setCorrectAnwser ] = useState({});

    let url = `https://restcountries.eu/rest/v2/alpha/`
    let url1, url2, url3, url4;
    [url1, url2, url3, url4] = fourCountries;

    let [ allData, setAllData ] = useState([{}]);

    const fetchData = () => {

        let arr = []
        axios.get(url+url1)
            .then(res => {
                let url1Data = res.data
                arr.push(url1Data);
            })
        axios.get(url+url2)
            .then(res => {
                let url1Data = res.data
                arr.push(url1Data);
            })
        axios.get(url+url3)
            .then(res => {
                let url1Data = res.data
                arr.push(url1Data);
            })
        axios.get(url+url4)
            .then(res => {
                let url1Data = res.data
                arr.push(url1Data);
            })
        setAllData(arr);
        console.log('fetchData;', allData);
    }

    let displayData = () => {

        let quizData = allData.map(i => ({ name: i.name, code: i.alpha2Code, capital: i.capital, flag: i.flag }));
        setQuizInfo(quizData);
        setCorrectAnwser(quizData[0]);
        console.log('displaydata:', quizData);
    }

    useEffect(() => {
        fetchData()
        displayData()
    }, [fourCountries]);

    return (
        <div className="quiz-box">
            { correctAnwser && <h3>{correctAnwser["capital"]} is the capital of</h3>}
            { quizInfo && quizInfo.map(i => <p key={i.code}>{i.name}</p>)}
            {/* { correctAnwser && <h3>{correctAnwser["name"]}</h3>} */}
            { allData && allData.map(i => <p>{i.name}</p>)}
        </div>
    )

}

export default Quiz;