import { useState, useEffect } from "react";

/* 
1.stocker essais -> comment ajouter dans un tableau avec useState ? 
2. decouper en lettres x
3.comparer mais dans quel ordre ?!
4.condition de gagne
5.mot aléatoires
6. compter le nombre d'essais
*/

export default function Motus() {
  const [wordToGuess, setWordToGuess] = useState("dictionnaire");
  const [wordsTried, setWordsTried] = useState([]);
  const [wellPlaced, setWellPlaced] = useState([]);
  const [missPlaced, setMissPlaced] = useState([]);
  const [notInWord, setNotInWord] = useState([]);
  const [tries, setTries] = useState({
    wordTried: "",
    charNotInWord: "",
    charMissPlaced: "",
    charPlaced: "",
  });

  useEffect(() => {
    checkMatch();
  }, [tries.wordTried]);

  const btnClicked = () => {
    setTries((previousState) => {
      return {
        ...previousState,
        wordTried: document.getElementById("word").value,
      };
    });
  };

  const addWordsTried = () => {
    setWordsTried();
  };

  const checkMatch = () => {
    addWordsTried();
    if (tries.wordTried === wordToGuess) {
      console.log(" C'est gagné !");
    } else {
      let charsToGuess = wordToGuess.split("");
      let charsTried = tries.wordTried.split("");
      let charNotInWord = [];
      let charMissPlaced = [];
      let charPlaced = [];
      for (let i = 0; i < charsToGuess.length; i++) {
        if (charsToGuess[i] === charsTried[i]) charPlaced += charsToGuess[i];
      }
    }
    console.log(tries);
  };

  /*   setTries((previousState) => {
    return {
      ...previousState,
      charPlaced: tries.charPlaced + charsTried[i],
    };
  }); */

  /* for (const char of charsTried) {
      if (charsToGuess.includes(char) == false && charsToGuess.length >= 1) {
        setTries((previousState) => {
          return {
            ...previousState,
            charNotInWord: tries.charNotInWord + char,
          };
        });
      }
    }
    for (let i = 0; i < arrayBase.length; i++) {
      if (arrayBase[i] == arrayWord[i]) {
        wellPlaced.push(arrayWord[i]);
      } else {
        missplaced.push(arrayWord[i]);
      }
    } */

  /* function tryWord(word, wordToGuess) {} */
  // empecher entrée nulle
  /* 	if (word === base) {
		return true
  } else { */

  /*   

    return {
      wellPlaced: wellPlaced,
      missplaced: missplaced,
      notInWord: notInWord,
    };
  } */

  /*   function guess() {
    let result = tryWord(word.toLowerCase(), base);
    document.getElementById("try").innerText =
      "Dernier mot essayé : " + word.toLowerCase();
    document.getElementById("word").value = "";
    if (result.wellPlaced.length == wordToGuess.length) {

      document.getElementById("well").innerText = "";
      document.getElementById("miss").innerText = "";
      document.getElementById("not").innerText = "";
      document.getElementById("win").innerText =
        "C'est le bon mot, vous avez gagné !";
    } else {
      if (result.wellPlaced != "") {
        document.getElementById("well").innerText =
          "Bien placé : " + result.wellPlaced.join(", ");
      }
      if (result.missplaced != "") {
        document.getElementById("miss").innerText =
          "Mal placé : " + result.missplaced.join(", ");
      }
      if (result.notInWord != "") {
        document.getElementById("not").innerText =
          "Pas dans le mot : " + result.notInWord.join(", ");
      }
    }
  } */

  return (
    <section>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col w-2/3 text-center items-center space-y-8">
          <h1>MOTUS</h1>
          <input
            type="text"
            id="word"
            name="word"
            minLength="1"
            size="20"
            required
            className="border-2"
          ></input>
          <button type="button" onClick={() => btnClicked()}>
            Ok
          </button>
          <p> mots essayés : {tries.wordTried}</p>
          <div id="infoOnTry">
            <p id="try"></p>
            <p id="well"></p>
            <p id="miss"></p>
            <p id="not"></p>
          </div>
          <p id="win"></p>
        </div>
      </div>
    </section>
  );
}
