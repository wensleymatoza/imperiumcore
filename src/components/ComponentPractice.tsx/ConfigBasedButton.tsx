import React, { useState } from 'react'

const ConfigBasedButton = () => {
    const [index, setIndex] = useState(0)

    const Fruits = [
        {name:"apple", color:"bg-red-200"},
        {name:"banana", color:"bg-yellow-300"},
        {name:"orange", color:"bg-orange-300"},
    ]
    
    const selectColor = () => {
        setIndex( (prev) => (prev + 1) % Fruits.length)
    }
  return (
    <div className={`flex border-2 p-2 m-2 h-100 w-100 rounded-2xl ${Fruits[index].color} `}>
        <button className={`flex border-2 p-2 h-fit w-fit rounded-2xl bg-white`} onClick={()=>selectColor()}>
            Config-base Button
        </button>
    </div>
  )
}

export default ConfigBasedButton
