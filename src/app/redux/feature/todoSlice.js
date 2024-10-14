import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: "1",
      text: "todos initial state",
    },
  ],
};

const addTodoHandler = (state, action) => {
  // state mean to access state.todos that is above in initial state
  // action will send payload {} object and that will be added in state todos
  const todo = {
    id: nanoid(),
    text: action.payload,
  };
  state.todos.push(todo);
};
// it update state and filer if not match then remove rest of the id show
const removeTodoHandler = (state, action) => {
  console.log("payload", action.payload);
  // state mean to access state.todos that is above in initial state
  state.todos = state.todos.filter((todo) => todo.id !== action.payload);
};
const updateTodoHandler = (state, action) => {
  // state mean to access state.todos that is above in initial state
  const { id, text } = action.payload;
  const todo = state.todos.find((todo) => todo.id === id);
  if (todo) {
    todo.text = text;
  }
};

// slice is used tu create reducer its a functionality

export const todosSlice = createSlice({
  name: "todo", // its show in dev tools
  initialState, // like above that will show when component load
  reducers: {
    // contains property and function logic handler
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    updateTodo: updateTodoHandler,
  },
});

// now we export 2 parts
// 1 individual reduces like addTodo, removeTodo and updateTodo that will used in components
export const { addTodo, removeTodo, updateTodo } = todosSlice.actions;

// 2 reducer that will be pass to store that will update that reducer state  so will pass all reducer slices
export default todosSlice.reducer;
