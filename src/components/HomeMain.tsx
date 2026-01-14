import {useState} from 'react'

type TodoItem = {
  id: number
  title:string
  description:string
}


const HomeMain = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [item, setItem] = useState<TodoItem[]>([])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const t = title.trim()
    const d = description.trim()

    if (!t) return
    const newItem: TodoItem = {
      id: Date.now(),
      title: t,
      description: d
  }

  setItem((prev) => [newItem, ...prev])
  setTitle('')
  setDescription('')

  if (!t) return 

  }
  return (
    <main>
      <div className="flex border-2 p-2 m-2 rounded-2xl min-h-screen overflow-x-auto ">
        <div className="flex border-2 p-2 m-2 flex-col rounded-2xl h-fit bg-yellow-100">
          
          <label htmlFor='todo_name' className="inline-flex border-2 p-2 m-2 w-fit rounded-2xl active:scale-105 transition ease-out bg-amber-200 hover:bg-blue-200 active:bg-green-300">Todo</label>
          <input id= 'todo_name' className="inline-flex border-2 p-2 m-2 rounded-2xl h-fit" placeholder="What to do......"/>
          
          <label htmlFor='todo_description' className="inline-flex border-2 p-2 m-2 w-fit rounded-2xl active:scale-105 transition ease-out bg-amber-200 hover:bg-blue-200 active:bg-green-300">Description</label>
          <input id= 'todo_description' className="inline-flex border-2 p-2 m-2 rounded-2xl h-fit" placeholder="Description"/>
                    

          









        </div>  

        <div className="border-2 flex flex-1 rounded-2xl p-2 flex-col">
          Output
          <div className="flex border-2 p-2 flex-1 rounded-2xl">

          </div>
        </div>
      </div>
      <div className="flex border-2 p-2 m-2 rounded-2xl min-h-screen">
       
      </div>
    </main>
  )
}

export default HomeMain
