```jsx
import React, { memo, useCallback } from 'react'
import { useTodos } from '../context/TodoContext'


function TodoItemComponent({ todo }) {
const { toggleTodo, removeTodo } = useTodos()


const onToggle = useCallback(() => toggleTodo(todo.id), [toggleTodo, todo.id])
const onRemove = useCallback(() => removeTodo(todo.id), [removeTodo, todo.id])


return (
<li className={`todo-item ${todo.done ? 'done' : ''}`}>
<label>
<input type="checkbox" checked={todo.done} onChange={onToggle} />
<span className="text">{todo.text}</span>
</label>
<button className="remove" onClick={onRemove} aria-label={`Remover ${todo.text}`}>
×
</button>
</li>
)
}


// memo to avoid re-renders quando props não mudam
const TodoItem = memo(TodoItemComponent)
export default TodoItem
```
