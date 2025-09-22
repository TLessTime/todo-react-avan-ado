jsx
import React, { useMemo } from 'react'
import { useTodos } from '../context/TodoContext'
import TodoItem from './TodoItem'


export default function TodoList() {
const { todos, filter } = useTodos()


const filtered = useMemo(() => {
if (filter === 'all') return todos
if (filter === 'done') return todos.filter(t => t.done)
return todos.filter(t => !t.done)
}, [todos, filter])


if (filtered.length === 0) {
return <p className="empty">Nenhuma tarefa encontrada.</p>
}


return (
<ul className="todo-list">
{filtered.map(todo => (
<TodoItem key={todo.id} todo={todo} />
))}
</ul>
)
}

