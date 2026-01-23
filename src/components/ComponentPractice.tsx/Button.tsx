import React, { useState } from 'react'

const Button = () => {
  const [click, setClick] = useState(false)
  //this is a toggle helper
  const changeBgColor = ()=>{
    setClick((prev) => !prev)
  }
  return (
    <div className='flex min-h-screen bg-slate-300'>
    <div className=''>
      <button className='flex border-2 p-2 m-2 bg-blue-200 rounded-2xl' onClick={() => changeBgColor()}>
        Button
      </button>
    </div>
    </div>
  )
}

export default Button
