const INITIAL_STATE = {
  todolist: [],
  loading: false,
  error: false,
};
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Add todos
    case 'FETCH_ADD_TODO': {
      return {
        ...state,
        // todolist: action.payload,
      };
    }
    case 'FETCH_ADD_SUCCESS': {
      return {
        ...state,
        // todolist: action.payload,
      };
    }
    case 'FETCH_ADD_TODO_ERROR': {
      return {
        ...state,
        error: true,
      };
    }
    // delete todos
    case 'DELETE_TODO': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'DELETE_TODO_SUCCESS': {
      return {
        ...state,
        loading: false,
      };
    }
    case 'DELETE_TODO_ERROR': {
      return {
        ...state,
        error: true,
        loading: false,
      };
    }
    // edit todos
    case 'FETCH_EDIT_TODO': {
      console.log(action.payload);
      const {id} = action.payload;
      return {
        ...state,
        id,
        loading: true,
      };
    }
    case 'FETCH_EDIT_TODO_SUCCESS': {
      const {id} = action.payload;
      return {
        ...state,
        id,
        loading: false,
      };
    }
    case 'FETCH_EDIT_TODO_ERROR': {
      return {
        ...state,
        error: true,
      };
    }
    //Get todos
    case 'REQUESTED_TODO': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'REQUESTED_TODO_SUCCESS': {
      return {
        ...state,
        loading: false,
        todolist: action.payload,
      };
    }
    case 'REQUESTED_TODO_ERROR': {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case 'REQUESTED_FAILED_TODO':
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
export default todoReducer;
