import { useState, useEffect } from "react";

/* TO DO
1.mise en page
2.add players
*/

export default function Allumettes() {
  const playerOn = "à toi de jouer !";
  const [matches, setMatches] = useState(1);
  const [matchesLeft, setMatchesLeft] = useState(50);
  const [players, setPlayers] = useState({
    matchesP1: 0,
    stateP1: "",
    matchesP2: 0,
    stateP2: "",
  });

  useEffect(() => {
    checkIfWin();
  }, [matchesLeft]);

  const randomFirstPlayer = () => {
    let randomNumber = Math.random();
    if (randomNumber <= 0.5) {
      setPlayers((previousState) => {
        return { ...previousState, stateP1: "", stateP2: playerOn };
      });
    } else {
      setPlayers((previousState) => {
        return { ...previousState, stateP2: "", stateP1: playerOn };
      });
    }
  };

  const removeLessOrMoreMatches = (lessOrMore) => {
    if (lessOrMore == "more" && matches < 6 && matches < matchesLeft) {
      setMatches(matches + 1);
    } else if (lessOrMore == "less" && matches > 1) {
      setMatches(matches - 1);
    }
  };

  const moveMatches = () => {
    setMatchesLeft(matchesLeft - matches);
    if (players.stateP1 == playerOn) {
      setPlayers((previousState) => {
        return { ...previousState, matchesP1: players.matchesP1 + matches };
      });
    } else {
      setPlayers((previousState) => {
        return { ...previousState, matchesP2: players.matchesP2 + matches };
      });
    }
  };

  const checkIfWin = () => {
    if (matchesLeft === 0 && players.stateP1 === playerOn) {
      setPlayers((previousState) => {
        return { ...previousState, stateP1: "A gagné !", stateP2: "" };
      });
    } else if (matchesLeft === 0 && players.stateP2 === playerOn) {
      setPlayers((previousState) => {
        return { ...previousState, stateP2: "A gagné !", stateP1: "" };
      });
    } else {
      turnPlayer();
      setMatches(1);
    }
  };

  const turnPlayer = () => {
    if (players.stateP1 == playerOn) {
      setPlayers((previousState) => {
        return { ...previousState, stateP1: "", stateP2: playerOn };
      });
    } else {
      setPlayers((previousState) => {
        return { ...previousState, stateP2: "", stateP1: playerOn };
      });
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col  w-3/4 text-center items-center space-y-8 bg-white p-12 rounded-xl">
          <h1> ALLUMETTES </h1>
          <p className="w-1/2">
            Il y a un tas de 50 allumettes. Chacun à son tour, les
            joueu.r.euse.s ôtent obligatoirement entre 1 et 6 allumettes. Celui
            qui ôte la dernière allumette gagne.
          </p>
          <button type="button" onClick={() => randomFirstPlayer()}>
            Jouer
          </button>
          <div className="flex flex-col space-y-16 items-center">
            <div className="flex flex-row space-x-16 items-center">
              <div className="flex flex-col space-y-4 items-center justify-between">
                <p>
                  Joueur.eus.e 1 <b>{players.stateP1}</b>
                </p>
                <p>{players.matchesP1} allumettes</p>
              </div>
              <h2>{matchesLeft} allumettes restantes</h2>
              <div className="flex flex-col space-y-4 items-center">
                <p>
                  Joueur.eus.e 2 <b>{players.stateP2}</b>
                </p>
                <p>{players.matchesP2} allumettes</p>
              </div>
            </div>
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
              <button type="button" onClick={() => moveMatches()}>
                enlever
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
