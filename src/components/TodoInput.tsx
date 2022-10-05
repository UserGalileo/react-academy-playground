interface TodoInputProps {
  onSubmit: (e: any) => void;
  input: string;
  onInputChange: (value: string) => void;
}

export function TodoInput(props: TodoInputProps) {

  return <form className="mb-3 input-group" onSubmit={props.onSubmit}>
    <input
        type="text"
        name="todo"
        className="form-control"
        placeholder="I'm going to..."
        value={props.input}
        onChange={e => props.onInputChange(e.target.value)}
    />
    <button className="btn btn-primary">Add</button>
    {
      !!props.input && <button
          type="button"
          className="fa fa-times"
          style={{
            background: 'none',
            border: 'none',
            position: 'absolute',
            right: 40,
            top: 0,
            bottom: 0,
            marginRight: 20,
            zIndex: 10
          }}
          onClick={() => props.onInputChange('')}
      />
    }
  </form>
}
