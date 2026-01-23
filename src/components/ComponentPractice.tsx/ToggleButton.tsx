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

  return (
    <div className='Toggle'>
      <button className='flex border-2 p-2 m-2 bg-blue-200 rounded-2xl' onClick={() => changeBgColor()}>
        Toggle Button
      </button>

      <div className={`flex ${bgColor} h-100 w-100 m-4 rounded-2xl items-center justify-center`}>
            hello world
      </div>
    </div>
  )
}


export default Button
