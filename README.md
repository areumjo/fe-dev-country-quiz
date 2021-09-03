# fe-dev-country-quiz

## Userstory

Challenge: Create a country quiz app using an API. Use Front-end libraries like React or Vue. Don’t look at the existing solution. Fulfill user stories below:

User story: I can see at least 2 types of questions: a city is the capital of.. or a flag belong to country..
User story: I can see select an answer
User story: I can see if my answer is correct or incorrect
User story: When I answer correctly, I can move on to the next question
User story: When I answer incorrectly, I can see my results and try again
User story: I can try again
Icon: https://google.github.io/material-design-icons/

### API

- API: https://restcountries.eu/. Use data from the API to create questions and answers.
  - Get all countries `https://restcountries.eu/rest/v2/all`
  - Search by captical city `https://restcountries.eu/rest/v2/capital/{capital}`
  - RESPONSE EXAMPLE `https://restcountries.eu/rest/v2/alpha/col`
  ```js
  [
    {
      name: "Colombia",
      topLevelDomain: [".co"],
      alpha2Code: "CO",
      alpha3Code: "COL",
      callingCodes: ["57"],
      capital: "Bogotá",
      altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
      region: "Americas",
      subregion: "South America",
      population: 48759958,
      latlng: [4.0, -72.0],
      demonym: "Colombian",
      area: 1141748.0,
      gini: 55.9,
      timezones: ["UTC-05:00"],
      borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
      nativeName: "Colombia",
      numericCode: "170",
      currencies: [
        {
          code: "COP",
          name: "Colombian peso",
          symbol: "$",
        },
      ],
      languages: [
        {
          iso639_1: "es",
          iso639_2: "spa",
          name: "Spanish",
          nativeName: "Español",
        },
      ],
      translations: {
        de: "Kolumbien",
        es: "Colombia",
        fr: "Colombie",
        ja: "コロンビア",
        it: "Colombia",
        br: "Colômbia",
        pt: "Colômbia",
      },
      flag: "https://restcountries.eu/data/col.svg",
      regionalBlocs: [
        {
          acronym: "PA",
          name: "Pacific Alliance",
          otherAcronyms: [],
          otherNames: ["Alianza del Pacífico"],
        },
        {
          acronym: "USAN",
          name: "Union of South American Nations",
          otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
          otherNames: [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union",
          ],
        },
      ],
      cioc: "COL",
    },
  ];
  ```

1. Load a list of countries name, choose randomly 4 countries

- Generate random 4 countries
  1. Generate random 4 numbers between 1 to 250 `[num1,num2,num3,num4]` and just call it like `countryData[num1], countryData[num2],...`
  2. Shuffle the `countryData array and take first 4 countries [shuffle JS array](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
  3. Search by country name, get capital and flag info << this way will be faster

### Quiz

- Ask 2 types of questions and total 5 questions : show how many an user got questions right at the end
- If an user selects right anwser, show `correct` response | else wrong answer, `wrong` response and right answer as well
