import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    setTodos([...todos, {id: Date.now(), text:newTodo }]);
    setNewTodo('');
  }

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }


  return (
    <div className='app-container'>
      <h1>Yapılacaklar Listesi</h1>
      <form onSubmit={handleAddTodo} className='todo-form'>
        <input 
          type='text'
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Yeni bir görev ekle'
        />
        <button type='submit'>Ekle</button>
      </form>
      <ul className='todo-list'>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default App;
