import React, { useState } from 'react'
// create a toggle button
//

const TodoApp = () => {
  const [isOn, setIsOn] = useState(false)
  const [checked, setChecked] = useState(false)

  const colorSwitch = () => {
    setIsOn((prev) => !prev)
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      {checked ? "Accepted" : "Not accepted"}
    </label>
  )
}

export default TodoApp
