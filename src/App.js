import "./App.css";
import Todo from "./app/component/todo/Todo";
import { Provider } from "react-redux";
import { store } from "./app/redux/store/store";
import AddTodo from "./app/component/addTodo/AddTodo";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/add-todo" element={<AddTodo />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
