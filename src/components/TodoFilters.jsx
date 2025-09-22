jsx
import React from 'react'
import { useTodos } from '../context/TodoContext'


export default function TodoFilters() {
const { filter, setFilter, counts } = useTodos()


return (
<div className="filters">
<div className="counts">
<span>Total: {counts.total}</span>
<span>Concluídas: {counts.done}</span>
<span>Pendentes: {counts.pending}</span>
</div>


<div className="buttons">
<button onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>
Todas
</button>
<button onClick={() => setFilter('active')} aria-pressed={filter === 'active'}>
Pendentes
</button>
<button onClick={() => setFilter('done')} aria-pressed={filter === 'done'}>
Concluídas
</button>
</div>
</div>
)
}


