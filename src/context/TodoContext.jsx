```jsx
import React, { createContext, useContext, useMemo } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


const TodoContext = createContext()


export function useTodos() {
return useContext(TodoContext)
}


export function TodoProvider({ children }) {
const [todos, setTodos] = useLocalStorage('todos', [])
const [filter, setFilter] = useLocalStorage('todos:filter', 'all')


function addTodo(text) {
const newTodo = { id: Date.now().toString(), text, done: false }
setTodos(prev => [newTodo, ...prev])
}


function toggleTodo(id) {
setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)))
}


function removeTodo(id) {
setTodos(prev => prev.filter(t => t.id !== id))
}


const counts = useMemo(() => {
const total = todos.length
const done = todos.filter(t => t.done).length
return { total, done, pending: total - done }
}, [todos])


const value = {
todos,
addTodo,
toggleTodo,
removeTodo,
filter,
setFilter,
counts
}


return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
```
