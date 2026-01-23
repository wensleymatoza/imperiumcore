import React, { useState } from 'react'

const Button = () => {
  const [click, setClick] = useState(false)
  //this is a toggle helper
  const changeBgColor = ()=>{
    setClick((prev) => !prev)
  }

  //value for the toggle helper
  const bgColor = click ? " bg-green-200": 'bg-red-200'
/////////////////////////////////////////////////////////////////////////////////////////////////////////
//Example
const Colors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-green-400',
    'bg-yellow-400'
]

const [index, setIndex] = useState(0)

const nextColor = () => {
    setIndex(prev => (prev + 1) % Colors.length)}

  return (
    <div className='flex min-h-screen bg-slate-300'>
    <div className='Toggle'>
      <button className='flex border-2 p-2 m-2 bg-blue-200 rounded-2xl' onClick={() => changeBgColor()}>
        Toggle Button
      </button>

      <div className={`flex ${bgColor} h-100 w-100 m-4 rounded-2xl items-center justify-center`}>
            hello world
      </div>
    </div>

    <div className='Circular Buffer Indexing'>
        <button className='flex border-2 p-2 rounded-2xl' onClick={() => nextColor()}>Circular Indexing</button>
        <div className={`flex border-2 p-2 m-2 h-100 w-100 rounded-2xl ${Colors[index]}`}>
        </div>
    </div>
    </div>
  )
}


export default Button
