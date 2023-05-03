import { Input } from "postcss";
import { useState, useEffect } from "react";

{
  /* className={`bg-${item.color}-600 rounded-full w-14`*/
}
/* 
    empecher selecteditems de dépasser 4
    veriier si tous les pions à la bonne place -> victoire
    veriier si pions pas à la bonne place4.return how many right place et how many wrong place  */
/* 
    Découper en modele :
    Model -> tout le reste
    view -> tous les composants de vues
    controller -> tous les appels apis */

const allItems = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "purple" },
  { id: 5, color: "green" },
  { id: 6, color: "orange" },
  { id: 7, color: "brown" },
  { id: 8, color: "pink" },
];
const colors = [1, 2, 3, 4, 5, 6];
const test = [1, 2, 3, 4];

export default function Mastermind() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [triedItems, setTriedItems] = useState([]);
  const [itemsToFind, setItemsToFind] = useState(test);

  const addToSelection = (color) => {
    setSelectedItems([...selectedItems, color]);
  };

  const trySelected = () => {
    if (selectedItems.toString() === itemsToFind.toString()) {
      console.log("Bravo");
    } else {
      for (let i = 0; i <= itemsToFind.length; i++) {
        if (selectedItems[i] === itemsToFind[i]) {
          console.log("Y en a un de bon");
        }
        setTriedItems([...triedItems, selectedItems]);
        setSelectedItems([]);
      }
    }
  };

  useEffect(() => {
    console.log("items to find : ", itemsToFind);
    console.log(selectedItems);
  }, [selectedItems]);

  /* const trySelectedColors = () => {
      for (let i = 0; i <= colorsToCompare.length; i++) {
        if (colorsToCompare[i] === colorsToGuess[i]) {
          score += 1;
          if (score == 4) alert("c'est gagné");
        }
      }
 */

  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col w-3/4 text-center items-center space-y-8 bg-white p-12 rounded-xl">
          <h1>MASTERMIND</h1>
          <div className="flex flex-row text-xs h-14 space-x-4">
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => addToSelection(color)}
                disabled={selectedItems.length >= 4}
              >
                {color}
              </button>
            ))}
          </div>
          <div className="triedItems">
            {triedItems.map((essai, index) => (
              <div>{essai}</div>
            ))}
          </div>
          <div className="currentTry flex flex-row text-xs h-14 space-x-4">
            <button
              type="button"
              className="rounded-full w-14"
              onClick={() => setSelectedItems([])}
            >
              Clear
            </button>
            {selectedItems.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
            <button
              onClick={() => trySelected()}
              disabled={selectedItems.length < 4}
            >
              Try
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
