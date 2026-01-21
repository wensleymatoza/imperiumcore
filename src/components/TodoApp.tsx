import React, { useState } from 'react'
// create a toggle button
//

const TodoApp = () => {
  const [isOn, setIsOn] = useState(false)

  const colorSwitch = () => {
    setIsOn((prev) => !prev)
  }
  return (
    <div className = {`size-svh border-2 rounded-2xl ${isOn ? 'bg-blue-200': 'bg-red-200'}`}>
      <button 
      className='flex border-2 p-2 m-2 w-fit rounded-2xl'
      onClick={colorSwitch}
       >
       {/* create a onclick helper for the toggle it has a pattern for it.  */}
          Switch
        
      </button>
    </div>
  )
}

export default TodoApp
