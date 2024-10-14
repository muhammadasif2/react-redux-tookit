import { Button, Table, ConfigProvider } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../../redux/feature/todoSlice";
import { useNavigate } from "react-router-dom";
import AddTodo from "../addTodo/AddTodo";

const Todo = () => {
  const [updatedData, setUpdatedData] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos);
  const updateHandler = (item) => {
    setUpdatedData(item);
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
        <Button onClick={() => updateHandler(item)}>Update</Button>
      ),
    },
    {
      title: "Delete",
      key: "text",
      name: "Title",
      render: (item) => (
        <Button onClick={() => dispatch(removeTodo(item.id))} color="primary">
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <AddTodo updatedData={updatedData} setUpdatedData={setUpdatedData} />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Todo;
