import React, { useState } from "react";

const CarouseLButton = () => {
  const Colors = ["bg-red-400", "bg-blue-400", "bg-green-400", "bg-yellow-400"];

  const [index, setIndex] = useState(0);

  const nextColor = () => {
    setIndex((prev) => (prev + 1) % Colors.length);
  };

  return (
    <div>
      <div className="Circular Buffer Indexing">
        <button
          className="flex border-2 p-2 rounded-2xl"
          onClick={() => nextColor()}
        >
          Circular Indexing
        </button>
        <div
          className={`flex border-2 p-2 m-2 h-100 w-100 rounded-2xl ${Colors[index]}`}
        ></div>
      </div>
    </div>
  );
};

export default CarouseLButton;
