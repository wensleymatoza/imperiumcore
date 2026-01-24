import React, { useState } from 'react'

const ConfigBasedButton = () => {
    const [index, setIndex] = useState(0)

    const Fruits = [
        {name:"Apple", color:"bg-red-400"},
        {name:"Banana", color:"bg-yellow-300"},
        {name:"Orange", color:"bg-orange-300"},
    ]
    const selectColor = () => {
        setIndex( (prev) => (prev + 1) % Fruits.length)
    }

  return (
    <div className={`flex flex-col border-2 p-2 m-2 h-100 w-100 rounded-2xl ${Fruits[index].color} `}>
        <button className={`flex border-2 p-2 h-fit w-fit rounded-2xl bg-white`} onClick={()=>selectColor()}>
            Config-based Button
        </button>
        <div className={`flex p-2 m-2 border-2 rounded-2xl h-fit ${Fruits[index].color} text-white border-black w-fit`}>
            <span>Name: {Fruits[index].name}</span>
        </div>
    </div>
  )
}
export default ConfigBasedButton