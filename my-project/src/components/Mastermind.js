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
  { id: 1, color: "red", style: "bg-red-600" },
  { id: 2, color: "blue", style: "bg-blue-600" },
  { id: 3, color: "yellow", style: "bg-yellow-600" },
  { id: 4, color: "purple", style: "bg-purple-600" },
  { id: 5, color: "green", style: "bg-green-600" },
  { id: 6, color: "orange", style: "bg-orange-600" },
  { id: 7, color: "gray", style: "bg-gray-600" },
  { id: 8, color: "pink", style: "bg-pink-600" },
];
const colors = [1, 2, 3, 4, 5, 6];
const test = [
  { id: 1, color: "red" },
  { id: 2, color: "blue" },
  { id: 3, color: "yellow" },
  { id: 4, color: "purple" },
];

export default function Mastermind() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [triedItems, setTriedItems] = useState([]);
  const [itemsToFind, setItemsToFind] = useState(test);

  const addToSelection = (item) => {
    setSelectedItems([...selectedItems, item]);
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

  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col w-3/4 text-center items-center space-y-8 bg-white p-12 rounded-xl">
          <h1>MASTERMIND</h1>
          <div className="flex flex-row text-xs h-14 space-x-4">
            {allItems.map((item) => (
              <button
                type="button"
                className={`${item.style} rounded-full w-14`}
                key={item.id}
                onClick={() => addToSelection({ item })}
                disabled={selectedItems.length >= 4}
              >
                {item.color}
              </button>
            ))}
          </div>
          <div className="triedItems">
            {triedItems.map((item) => (
              <div key={item.id}>{item.color}</div>
            ))}
          </div>
          <div className="currentTry flex flex-row text-sm  space-x-4 w-3/4 justify-between items-center">
            <button
              type="button"
              className="rounded-full"
              onClick={() => setSelectedItems([])}
            >
              Clear
            </button>
            <div className="flex justify-center">
              {selectedItems.map((item) => (
                <div className="h-12 bg-red">
                  <p key={item.id}>{item.color}</p>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="rounded-full"
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
