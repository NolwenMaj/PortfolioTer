import { useState } from "react";

/* 1. put value 
2. chack player
3.random forst player
4.condition de gagne
*/

export default function Allumettes() {
  const [playerOne, setPlayerOne] = useState({
    matches: 0,
    playing: "on",
  });
  const [playerTwo, setPlayerTwo] = useState({
    matches: 0,
    playing: "off",
  });
  const [matches, setMatches] = useState(1);
  const [matchesLeft, setMatchesLeft] = useState(10);
/*    const [players, setPlayers] = useState([
    { id: 1, matches: 0, state: "on" },
    { id: 2, matches: 0, state: "off" },
  ]) */

  const turnPlayer = () => {
    if (playerOne.playing == "on") {
      setPlayerOne((previousState) => {
        return { ...previousState, playing: "off" };
      });
      setPlayerTwo((previousState) => {
        return { ...previousState, playing: "on" };
      });
    } else {
      setPlayerTwo((previousState) => {
        return { ...previousState, playing: "off" };
      });
      setPlayerOne((previousState) => {
        return { ...previousState, playing: "on" };
      });
    }
  };

  const addMatchesToPlayers = () => {
    if (playerOne.playing == "on") {
      setPlayerOne((previousState) => {
        return { ...previousState, matches: playerOne.matches + matches };
      });
    } else {
      setPlayerTwo((previousState) => {
        return { ...previousState, matches: playerTwo.matches + matches };
      });
    }
  };

  const checkIfWin = () => {
    if (matchesLeft === 0) {
      if (playerOne.playing == "on") {
        setPlayerOne((previousState) => {
          return { ...previousState, playing: "Winner !" };
        });
      } else if (playerTwo.playing == "on") {
        setPlayerTwo((previousState) => {
          return { ...previousState, playing: "Winner !" };
        });
      }
    } else {
      setMatches(1);
    }
  };

  function btnClicked() {
    setMatchesLeft(matchesLeft - matches);
    addMatchesToPlayers();
    checkIfWin()
    turnPlayer();
  }

  function removeLessOrMoreMatches(lessOrMore) {
    if (lessOrMore == "more" && matches < 6 && matches < matchesLeft) {
      setMatches(matches + 1);
    } else if (lessOrMore == "less" && matches > 1) {
      setMatches(matches - 1);
    }
  }

  return (
    <section>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col w-2/3 text-center items-center space-y-8">
          <h1> ALLUMETTES </h1>
          <p className="w-1/2">
            Il y a un tas de 50 allumettes. Chacun à son tour, les
            joueu.r.euse.s ôtent obligatoirement entre 1 et 6 allumettes. Celui
            qui ôte la dernière allumette gagne.
          </p>
          <div className="flex flex-col space-y-16 items-center">
            <div className="flex flex-row space-x-16 items-center">
              <p>
                Player One : {playerOne.matches} matches{" "}
                <b>{playerOne.playing}</b>
              </p>
              <h2>{matchesLeft} allumettes restantes</h2>
              <p>
                Player Two : {playerTwo.matches} matches{" "}
                <b>{playerTwo.playing}</b>
              </p>
            </div>
            <p id="turnsAndWinner"></p>
            <div className="flex flex-row space-x-4 items-center">
              <button
                type="button"
                onClick={() => removeLessOrMoreMatches("less")}
              >
                -
              </button>
              <p>{matches}</p>
              <button
                type="button"
                onClick={() => removeLessOrMoreMatches("more")}
              >
                +
              </button>
              <button type="button" onClick={() => btnClicked()}>
                remove
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*       <button class="buttons" id="playNow" onclick=" initialisation()">
          {" "}
          Jouons !{" "}
        </button>
      </div>
      <div id="input">
        <label class="texteBasique" for="jeu" id="min">
          {" "}
          1 inférieur à{" "}
        </label>
        <input
          id="jeu"
          type="number"
          name="jeu"
          min="1"
          max="6"
          autocomplete="off"
          onfocus=" "
        ></input>
        <label class="texteBasique" for="jeu" id="max">
          {" "}
          inférieur à 6{" "}
        </label>
        <input
          class="buttons"
          type="submit"
          id="send"
          onclick="retirerAllumettes()"
        ></input>
      </div>
      <div class="divs">
        <p id="allumettesRestantes" class="texteBasique"></p>
        <p id="joueurOn" class="texteBasique"></p>
      </div> */}
    </section>
  );
}
