import { useState } from 'react'


function ToDo() {
  const [toDos, setToDos] = useState([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState('all')

  const addToDo = () => {
    if (!input.trim()) return // no empty todos
    setToDos(prev => [...prev, {
      id: Date.now(),
      text: input,
      completed: false
    }])
    setInput('') //  clear input after adding
  }
  const toggleToDo = (id) => {
    setToDos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }
  const deleteToDo = (id) => {
    setToDos(prev => prev.filter(todo => todo.id !== id))
  }
  // filter is derived state, we can compute it on the fly instead of storing it separately
  const filteredToDos = toDos.filter(todo => 
    filter === 'all' ? true : filter === 'completed' ? todo.completed : !todo.completed
  )
  // remaining count is also derived state, we can compute it on the fly instead of storing it separately
  const remaining = toDos.filter(todo => !todo.completed).length

 return (
  <div className="todo-app">
    <div className="todo-input">
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addToDo()}
        placeholder="Add a to-do"
      />
      <button onClick={addToDo}>Add</button>
    </div>

    <div className="todo-filters">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>

    <ul className="todo-list">
      {filteredToDos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleToDo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => deleteToDo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>

    {filteredToDos.length === 0 && <p>No tasks here!</p>}

    <p>{remaining} items remaining</p>
  </div>
)
}

export default ToDo