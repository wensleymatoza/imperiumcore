import { useState } from "react"

type TodoItem = {
  id: number,
  name: string,
  description: string
}


const TodoApp = () => {
  const[name, setName] = useState('') //input 1
  const[description, setDescription] = useState('') //input 2
  const[person, setPerson] = useState<TodoItem[]>([])

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    //get the input for submit function
    const n = name.trim()
    const d = description.trim()

    if (!n) return

    //create new item 
    const newItem:TodoItem = {
      id: Date.now(),
      name: n,
      description: d
    }
    //this means create an array where you update the item value of the useState hook
    setPerson((prev) => [newItem, ...prev])
    setName('')
    setDescription('')
  }

  return (
    <div className = 'flex border-2 min-h-svh min-w-svh '>
      <form className="flex border-2 bg-blue-200 w-[50%] flex-col" onSubmit={onSubmit}>
        <input className= "flex border-2 h-fit w-fit p-2 m-2 rounded-2xl" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className= "flex border-2 h-fit w-fit p-2 m-2 rounded-2xl" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <button type="submit" className="flex border-2 p-2 m-2 w-fit rounded-2xl" >Submit</button>
      </form>
      <div className = 'flex flex-1 border-2 bg-yellow-200 flex-col'>
        <span><h1>Output</h1></span>
        {person.map((item) => (
          <div key={item.id} className="flex flex-col p-2 m-2 bg-green-200 h-fit border-2 rounded-2xl">
          <span><h1>{item.name}</h1></span>
          <span><h1>{item.description}</h1></span>
          </div>
        ))}

      </div>
    </div>
  )
}

export default TodoApp

//the arrary at the end is the container of the add new items [newItem, ...prev] where newItem is the new Item and ...prev is the previous savedItem