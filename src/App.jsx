import React from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoPage from './pages/TodoPage'

export default function App(){
  return (
    <TodoProvider>
      <div className="app">
        <header className="header">
          <h1>Todo React Avançado</h1>
        </header>
        <main>
          <TodoPage />
        </main>
      </div>
    </TodoProvider>
  )
}
