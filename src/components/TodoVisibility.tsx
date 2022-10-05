import { TodoFilter } from '../pages/TodoListDemo';

interface TodoVisibilityProps {
  filter: TodoFilter;
  onFilterChange: (x: TodoFilter) => void;
}

export function TodoVisibility({ filter, onFilterChange} : TodoVisibilityProps) {

  function renderFilterButton(buttonFilter: TodoFilter, text: string) {
    return <button
        className={`btn btn-sm btn-outline-primary ${filter === buttonFilter ? 'active' : ''}`}
        onClick={() => onFilterChange(buttonFilter)}
    >{text}</button>
  }

  return <div className="btn-group mb-3">
    {renderFilterButton('all', 'All')}
    {renderFilterButton('active', 'Active')}
    {renderFilterButton('completed', 'Completed')}
  </div>
}
