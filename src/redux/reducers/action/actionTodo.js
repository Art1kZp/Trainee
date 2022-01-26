// add todos
export const addTodo = text => {
  return {
    type: 'FETCH_ADD_TODO',
    payload: text,
  };
};
export const addTodoSuccess = text => {
  return {
    type: 'FETCH_ADD_TODO_SUCCESS',
    payload: text,
  };
};
export const addTodoError = err => {
  return {
    type: 'FETCH_ADD_TODO_ERROR',
    payload: err,
  };
};
// get todos
export const requestTodo = () => {
  return {
    type: 'REQUESTED_TODO',
  };
};
export const requestTodoSuccess = todoList => {
  return {
    type: 'REQUESTED_TODO_SUCCESS',
    payload: todoList,
  };
};
export const requestTodoError = err => {
  return {
    type: 'REQUESTED_TODO_ERROR',
    payload: err,
  };
};
// delete todos
export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};
export const deleteTodoSuccess = id => {
  return {
    type: 'DELETE_TODO_SUCCESS',
    payload: id,
  };
};
export const deleteTodoError = err => {
  return {
    type: 'DELETE_TODO_ERROR',
    payload: err,
  };
};
// edit todos
export const editTodo = id => {
  return {
    type: 'FETCH_EDIT_TODO',
    payload: id,
  };
};
export const editTodoSuccess = id => {
  return {
    type: 'FETCH_EDIT_TODO_SUCCESS',
    payload: id,
  };
};
export const editTodoError = err => {
  return {
    type: 'FETCH_EDIT_TODO_ERROR',
    payload: err,
  };
};

