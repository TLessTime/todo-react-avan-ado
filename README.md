```md
# todo-react-avancado


Aplicação de lista de tarefas (Todo List) com recursos avançados de React: Hooks, Hooks customizados, Context API e memoization.


## Funcionalidades
- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtrar tarefas (todas, concluídas, pendentes)
- Persistência via localStorage


## Tecnologias
- React 18
- Vite
- CSS simples (sem framework)


## Como rodar localmente
1. Clone o repositório (ou crie um novo com estes arquivos):


```bash
git clone <seu-repo-url>
cd todo-react-avancado
```


2. Instale dependências:


```bash
npm install
```


3. Rode em modo dev:


```bash
npm run dev
```


Abra `http://localhost:5173` (ou a porta que o Vite informar).

## 🧠 Notas de implementação
- `TodoContext` fornece estado global da lista e ações.
- `useLocalStorage` é um hook customizado para leitura/escrita em localStorage.
- `useInput` encapsula lógica de input controlado.
- `useMemo` e `React.memo` foram aplicados para reduzir renderizações.


## Próximos passos (sugestões)
- Adicionar edição inline da tarefa
- Ordenação e prioridades
- Testes unitários
