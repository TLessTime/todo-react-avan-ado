jsx
import React from 'react'
import TodoForm from './components/TodoForm'
import TodoFilters from './components/TodoFilters'
import TodoList from './components/TodoList'


export default function App() {
return (
<div className="app">
<header>
<h1>Todo React Avançado</h1>
<p>Hooks, Context, Hooks customizados e memoization</p>
</header>


<main>
<TodoForm />
<TodoFilters />
<TodoList />
</main>


<footer>
<small>Feito com ♥ usando React</small>
</footer>
</div>
)
}

