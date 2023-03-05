import PropTypes from 'prop-types';
import { TodoItemProps, TodoProps } from '../rules.d';
import TodoItem from './TodoItem';

function TodosList({
  todosProps, handleChange, delTodo, setUpdate,
}) {
  return (
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
}

TodosList.propTypes = {
  todosProps: PropTypes.shape({
    ...TodoItemProps,
    map: PropTypes.func,
  }).isRequired,
  ...TodoProps,
};

export default TodosList;
