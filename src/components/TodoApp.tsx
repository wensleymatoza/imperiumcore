import React, { useState } from 'react'
// create a toggle button
//

const TodoApp = () => {
  const [isOn, setIsOn] = useState(false)
  const [checked, setChecked] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const colorSwitch = () => {
    setIsOn((prev) => !prev)
  }
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div
          className="overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="modal"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)}>
              X
            </button>
            <p>Modal content</p>
          </div>
        </div>
      )}
  </>
  )
}

export default TodoApp
