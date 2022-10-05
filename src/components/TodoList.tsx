import { Todo } from '../pages/TodoListDemo';

interface TodoListProps {
  todos: Todo[];
  onCheckTodo: (id: number, completed: boolean) => void;
  onRemoveTodo: (id: number) => void;
}

export function TodoList(props: TodoListProps) {
  return <ul className="list-group">
    {
      props.todos.map(todo => (
          <li key={todo.id} className="list-group-item" style={{ display: 'flex', alignItems: 'center' }}>
            <input
                className="form-check-input me-3"
                type="checkbox"
                checked={todo.completed}
                onChange={() => props.onCheckTodo(todo.id, !todo.completed)}
            />
            <span style={{ flex: 1, textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
            <button
                className="fa fa-times"
                style={{ background: 'none', border: 'none' }}
                onClick={() => props.onRemoveTodo(todo.id)}
            />
          </li>
      ))
    }
  </ul>
}
