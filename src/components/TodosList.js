import TodoItem from './TodoItem';

const TodosList = ({ todosProps, setTodos, handleChange, delTodo, addTodoItem, setUpdate }) => (
  <ul>
    {todosProps.map((todo) => (
      <TodoItem
        key={todo.id}
        itemProp={todo}
        handleChange={handleChange}
        delTodo={delTodo}
        setUpdate={setUpdate}
      />
    ))}
  </ul>
);

export default TodosList;
