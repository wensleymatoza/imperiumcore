import { useState } from 'react'
import TodoApp from './TodoApp'
//create type for TODO item
type TodoItem = {
  id: number
  title: string
  description: string
}
//main Component
const HomeMain = () => {
// create the state hooks here
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [items, setItems] = useState<TodoItem[]>([])
// 
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const t = title.trim()
    const d = description.trim()

    if (!t) return

    const newItem: TodoItem = {
      id: Date.now(),
      title: t,
      description: d,
    }

    setItems((prev) => [newItem, ...prev])
    setTitle('')
    setDescription('')
  }

  return (
    <main>
      <div className="flex border-2 p-2 m-2 rounded-2xl min-h-screen overflow-x-auto gap-2">
        {/* LEFT: Inputs */}
        <form
          onSubmit={onSubmit}
          className="flex border-2 p-2 m-2 flex-col rounded-2xl h-fit bg-yellow-100 min-w-[320px]"
        >
          <label
            htmlFor="todo_name"
            className="inline-flex border-2 p-2 m-2 w-fit rounded-2xl active:scale-105 transition ease-out bg-amber-200 hover:bg-blue-200 active:bg-green-300"
          >
            Todo
          </label>

          <input
            id="todo_name"
            className="inline-flex border-2 p-2 m-2 rounded-2xl h-fit"
            placeholder="What to do......"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label
            htmlFor="todo_description"
            className="inline-flex border-2 p-2 m-2 w-fit rounded-2xl active:scale-105 transition ease-out bg-amber-200 hover:bg-blue-200 active:bg-green-300"
          >
            Description
          </label>

          <input
            id="todo_description"
            className="inline-flex border-2 p-2 m-2 rounded-2xl h-fit"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type="submit"
            className="border-2 p-2 m-2 rounded-2xl bg-stone-100 hover:bg-stone-200 active:scale-95"
          >
            Add
          </button>

          {!title.trim() && (
            <p className="mx-2 text-sm opacity-70">
              Enter a Todo title then press Enter or click Add.
            </p>
          )}
        </form>

        {/* RIGHT: Output */}
        <div className="border-2 flex flex-1 rounded-2xl p-2 flex-col min-w-[320px]">
          <h2 className="font-bold p-2">Output</h2>

          <div className="flex border-2 p-2 flex-1 rounded-2xl flex-col gap-2 overflow-y-auto">
            {items.length === 0 ? (
              <p className="opacity-60">No items yet.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="border rounded-2xl p-3">
                  <div className="font-semibold">{item.title}</div>
                  {item.description && (
                    <div className="text-sm opacity-80">
                      {item.description}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="flex border-2 p-2 m-2 rounded-2xl min-h-screen">
            <TodoApp />
      </div>
    </main>
  )
}

export default HomeMain
