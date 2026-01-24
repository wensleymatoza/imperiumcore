
// create a toggle button
//

const TodoApp = () => {

  return (
    <>
    <div className="flex border-2 min-h-svh w-screen bg-slate-700 text-white p-2">
      <label htmlFor="input1 ">Check</label>
        <input 
          className="flex border-2 p-2 m-2 h-fit "
          type="radio"
          placeholder="Check this out"
          id="input1"/>          
    </div>
  </>
  )
}

export default TodoApp
