import { useState } from "react";
import { create } from "zustand";

const useTodoStore = create((set) => ({
  todos: [],
  nextId: 1,

  addTodo: (title) =>
    set((state) => ({
      todos: [...state.todos, { id: state.nextId, title, done: false }],
      nextId: state.nextId + 1,
    })),

  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>todo.id === id ? { ...todo, done: !todo.done } : todo)
    })),

  removeTodo: (id) =>
    set((state) => ({todos: state.todos.filter((todo) => todo.id !== id)})),
}));

function App() {
  const { todos, addTodo, toggleTodo, removeTodo } = useTodoStore();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;
    addTodo(title);
    setTitle('');
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input placeholder="할 일을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleAdd}>추가</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={{textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer'}} onClick={() => toggleTodo(todo.id)} >
              {todo.id}. {todo.title}
            </span>
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App