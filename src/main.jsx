jsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { TodoProvider } from './context/TodoContext'
import './index.css'


createRoot(document.getElementById('root')).render(
<React.StrictMode>
<TodoProvider>
<App />
</TodoProvider>
</React.StrictMode>
)

