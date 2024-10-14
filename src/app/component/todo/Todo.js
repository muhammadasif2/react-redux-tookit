import { Button, Table, ConfigProvider } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../redux/feature/todoSlice";
import { useNavigate } from "react-router-dom";
import AddTodo from "../addTodo/AddTodo";

const Todo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  const updateHandler = (item) => {
    console.log("item", item);
    navigate("/add-todo", { state: item });
  };
  const dataSource = [];
  todoList.map((item) => {
    dataSource.push({
      id: item.id,
      text: item.text,
      item: item,
    });
  });
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      key: "text",
      name: "Title",
      dataIndex: "text",
    },
    {
      title: "Update",
      key: "text",
      name: "Title",
      render: (item) => (
        <Button onClick={() => updateHandler(item)}>Update({item.id})</Button>
      ),
    },
    {
      title: "Delete",
      key: "text",
      name: "Title",
      render: (item) => (
        <Button onClick={() => dispatch(removeTodo(item.id))} color="primary">
          Delete({item.id})
        </Button>
      ),
    },
  ];

  return (
    <div>
      <AddTodo />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Todo;
