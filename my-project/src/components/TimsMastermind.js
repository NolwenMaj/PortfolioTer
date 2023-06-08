import { Input } from "postcss";
import { useState, useEffect } from "react";

/* 
    clear
    veriier si tous les pions à la bonne place -> victoire
    veriier si pions pas à la bonne place4.return how many right place et how many wrong place  */
/* 
    Découper en modele :
    Model -> tout le reste
    view -> tous les composants de vues
    controller -> tous les appels apis */

const items = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "purple" },
  { id: 5, color: "green" },
  { id: 6, color: "orange" },
  { id: 7, color: "brown" },
  { id: 8, color: "pink" },
];
export default function Mastermind() {
  const [selectedItem, setSelectedItem] = useState();
  const [configurationToFind, setConfigurationToFind] = useState([
    items[0],
    items[1],
    items[2],
    items[3],
  ]);
  const [configurationToCompare, setConfigurationToCompare] = useState([]);
  const [configurationTried, setConfigurationTried] = useState([]);

  const [items2, setItems2] = useState([])


  // useEffect(() => {
  //   if (selectedItem == items[0]) {
  //     clearSelectedColors();
  //   } else {
  //     setConfigurationToCompare([...configurationToCompare, selectedItem]);
  //     console.log("configuration to find : ", configurationToFind);
  //     console.log("configuration to compare : ", configurationToCompare);
  //     console.log("selected item: ", selectedItem);
  //   }
  // }, [selectedItem]);

  const clearSelectedColors = () => {
    setConfigurationToCompare([]);
    console.log("selection cleared");
  };
  const onPush = () => {
    setItems2([...items2, '1'])
  }

  useEffect(() => {
    console.log(items2)
  }, [items2])

  /* const trySelectedColors = () => {
    let score = 0;
    if (colorsToCompare.length === 4) {
      for (let i = 0; i <= colorsToCompare.length; i++) {
        if (colorsToCompare[i] === colorsToGuess[i]) {
          score += 1;
          if (score == 4) alert("c'est gagné");
        }
      }
    } else {
      alert("Selectionne 4 couleurs !");
    }
  };
 */
  return (
    <section>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col w-2/3 text-center items-center space-y-8 bg-white p-12 rounded-xl">
          <h1>MASTERMIND</h1>
          <div className="flex flex-row text-xs h-14 space-x-4">
            {items.map((item) => (
              /* {item.color}{" "} */
              <button
                key={item.id}
                className={`bg-${item.color}-600 rounded-full w-14`}
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                {item.color}
              </button>
            ))}
          </div>
          <div className="flex flex-row text-xs h-14 space-x-4">
            <button
              type="button"
              className="rounded-full w-14"
              onClick={() => clearSelectedColors()}
            >
              clear
            </button>
            <button
              type="button"
              className="rounded-full w-14"
              onClick={() => trySelectedColors()}
            >
              try
            </button>
          </div>
        </div>
        <button  onClick={() => onPush()}>Push</button>
        {/*  <p>You picked {selectedItem.color}.</p> */}
      </div>
    </section>
  );
}
