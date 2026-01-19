import { title } from "process"
import { useState } from "react"

type TodoItem = {
  id: number, 
  name: string,
  job:string
}

const TodoApp = () => {
  const [name, setName] = useState('')
  const [job, setJob] = useState('')
  const [item, setItem] = useState<TodoItem[]>([])

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    const n = name.trim()
    const t = job.trim()

    if (!n) return

    const newItem: TodoItem = {
      id:Date.now(),
      name: n,
      job: t
    }

    setItem((prev) => [newItem, ...prev])
    setName('')
    setJob('')
}


  return (
    <div className = 'flex border-2 min-svh flex-1 p-2'>
       <div>
        <form className="flex flex-1" onSubmit={onSubmit}>
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
            onChange={(e) => setJob(e.target.value)}/>
          
        </form>
    


       </div>
        <div className="flex border-2 rounded-2xl p-2 flex-1">
          output

          <h1>{}</h1>
        </div>
    </div>
  )
}

export default TodoApp
//the arrary at the end is the container of the add new items [newItem, ...prev] where newItem is the new Item and ...prev is the previous savedItem