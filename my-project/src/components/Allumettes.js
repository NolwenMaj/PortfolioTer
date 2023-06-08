import { useState, useEffect } from "react";

/* TO DO
1.mise en page
2.add players
*/

export default function Allumettes() {
  const p1plays = "Au tour de Joueur.euse 1 !";
  const p1wins = "Joueur.euse 1 a gagné !";
  const p2plays = "Au tour de Joueur.euse 2 !";
  const p2wins = "Joueur.euse 2 a gagné !";

  const [game, setGame] = useState({
    matchesToRemove: 1,
    matchesLeft: 50,
    matchesPlayer1: 0,
    matchesPlayer2: 0,
    state: "",
    intro: true,
  });

  useEffect(() => {
    checkIfWin();
  }, [game.matchesLeft]);

  const startGame = () => {
    randomFirstPlayer();
    setGame({
      matchesToRemove: 1,
      matchesLeft: 50,
      matchesPlayer1: 0,
      matchesPlayer2: 0,
      state: "",
      intro: false,
    });
    return;
  };

  const randomFirstPlayer = () => {
    let randomNumber = Math.random();
    if (randomNumber <= 0.5) {
      setGame((previousState) => {
        return { ...previousState, state: p1plays };
      });
    } else {
      setGame((previousState) => {
        return { ...previousState, state: p2plays };
      });
    }
  };

  const removeLessOrMoreMatches = (lessOrMore) => {
    if (
      lessOrMore == "more" &&
      game.matchesToRemove < 6 &&
      game.matchesToRemove < game.matchesLeft
    ) {
      setGame((previousState) => {
        return { ...previousState, matchesToRemove: game.matchesToRemove + 1 };
      });
    } else if (lessOrMore == "less" && game.matchesToRemove > 1) {
      setGame((previousState) => {
        return { ...previousState, matchesToRemove: game.matchesToRemove - 1 };
      });
    }
  };

  const moveMatches = () => {
    setGame((previousState) => {
      return {
        ...previousState,
        matchesLeft: game.matchesLeft - game.matchesToRemove,
      };
    });
    if (game.state === p1plays) {
      setGame((previousState) => {
        return {
          ...previousState,
          matchesPlayer1: game.matchesPlayer1 + game.matchesToRemove,
        };
      });
    } else {
      setGame((previousState) => {
        return {
          ...previousState,
          matchesPlayer2: game.matchesPlayer2 + game.matchesToRemove,
        };
      });
    }
  };

  const checkIfWin = () => {
    if (game.matchesLeft === 0) {
      if (game.state === p1plays) {
        setGame((previousState) => {
          return { ...previousState, state: p1wins };
        });
      } else {
        setGame((previousState) => {
          return { ...previousState, state: p2wins };
        });
      }
    } else {
      turnPlayer();
      setGame((previousState) => {
        return { ...previousState, matchesToRemove: 1 };
      });
    }
  };

  const turnPlayer = () => {
    if (game.state === p1plays) {
      setGame((previousState) => {
        return { ...previousState, state: p2plays };
      });
    } else {
      setGame((previousState) => {
        return { ...previousState, state: p1plays };
      });
    }
  };

  const BtnRemoveOrReplay = ({ state }) => {
    if (state == p1plays || state == p2plays) {
      return (
        <button type="button" onClick={() => moveMatches()}>
          enlever
        </button>
      );
    } else if (state == p1wins || state == p2wins) {
      return (
        <button type="button" onClick={() => startGame()}>
          rejouer
        </button>
      );
    }
  };

  const View = ({ intro, state }) => {
    if (intro === true) {
      return (
        <div className="flex flex-col text-center items-center space-y-8">
          <h1> ALLUMETTES </h1>
          <p className="w-1/2">
            Il y a un tas de 50 allumettes. Chacun à son tour, les
            joueu.r.euse.s ôtent obligatoirement entre 1 et 6 allumettes. Celui
            qui ôte la dernière allumette gagne.
          </p>
          <button type="button" onClick={() => startGame()}>
            Jouer
          </button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col space-y-16 items-center">
          <p>{game.state}</p>
          <div className="flex flex-row space-x-16 items-center">
            <div className="flex flex-col space-y-4 items-center justify-between">
              <p>Joueur.eus.e 1</p>
              <p>{game.matchesPlayer1} allumettes</p>
            </div>
            <h2>{game.matchesLeft} allumettes restantes</h2>
            <div className="flex flex-col space-y-4 items-center">
              <p>Joueur.eus.e 2</p>
              <p>{game.matchesPlayer2} allumettes</p>
            </div>
          </div>
          <div className="flex flex-row space-x-4 items-center">
            <button
              type="button"
              onClick={() => removeLessOrMoreMatches("less")}
            >
              -
            </button>
            <p>{game.matchesToRemove}</p>
            <button
              type="button"
              onClick={() => removeLessOrMoreMatches("more")}
            >
              +
            </button>
            <BtnRemoveOrReplay state={game.state} />
          </div>
        </div>
      );
    }
  };

  return (
    <section>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col  w-3/4 text-center items-center space-y-8 bg-white p-12 rounded-xl">
          <View state={game.state} intro={game.intro} />
        </div>
      </div>
    </section>
  );
}
