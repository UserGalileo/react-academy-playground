import { useState } from 'react';
import { TodoInput } from '../components/TodoInput';
import { TodoVisibility } from '../components/TodoVisibility';
import { TodoList } from '../components/TodoList';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type TodoFilter = 'all' | 'active' | 'completed';

export function TodoListDemo() {

  const [input, setInput] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const todosByInput = todos.filter(t => t.text.includes(input));
  const todosByFilter =
      filter === 'active' ? todos.filter(t => !t.completed)
      : filter === 'completed' ? todos.filter(t => t.completed)
      : todos;
  const filteredTodos = todosByInput.filter(t => todosByFilter.findIndex(tt => tt.id === t.id) > - 1)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const input = (e.target as any).todo;
    // console.log(input.value);
    // input.value = '';
    setInput('');
    const newTodo = {
      id: Math.random(),
      text: input,
      completed: false
    }
    setTodos([ ...todos, newTodo ])
  }

  function checkTodo(id: number, completed: boolean) {
    const newTodos = todos.map(todo => {
      if (todo.id !== id) return todo;
      return {
        ...todo,
        completed
      }
    })
    setTodos(newTodos);
  }

  function removeTodo(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
  }

  return (
      <div className="p-4">
        <TodoVisibility
            filter={filter}
            onFilterChange={setFilter}
        />
        <TodoInput
            onSubmit={onSubmit}
            input={input}
            onInputChange={setInput}
        />
        <TodoList
            todos={filteredTodos}
            onCheckTodo={checkTodo}
            onRemoveTodo={removeTodo}
        />
      </div>
  )
}
