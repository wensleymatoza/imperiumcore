import { useState } from "react"

const TodoApp = () => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')

  return (
    <div className = 'flex border-2 min-svh flex-1 p-2'>
       <div>
        <form className="flex flex-1">
          <input 
            className = 'flex border-2 p-2 m-2 rounded-2xl' 
            placeholder="title"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="string"/>
            
          <input 
            className = 'flex border-2 p-2 m-2 rounded-2xl' 
            placeholder="description"
            value={job}
            onChange={(e) => setJob(e.target.value)} />
          
        </form>
    


       </div>
        <div className="flex border-2 rounded-2xl p-2 flex-1">
          output

          <h1>{name}</h1>
        </div>
    </div>
  )
}

export default TodoApp
