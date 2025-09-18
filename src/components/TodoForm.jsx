```jsx
import React from 'react'
import { useTodos } from '../context/TodoContext'
import useInput from '../hooks/useInput'


export default function TodoForm() {
const { addTodo } = useTodos()
const { value, onChange, reset } = useInput('')


function handleSubmit(e) {
e.preventDefault()
const text = value.trim()
if (!text) return
addTodo(text)
reset()
}
