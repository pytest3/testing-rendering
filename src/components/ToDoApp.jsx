import styled from "styled-components";
import { useState, useReducer } from "react";

import ToDoList from "./ToDoList";
import toDoReducer from "../reducers/toDoReducer";

export default function ToDoApp() {
  const [toDos, dispatch] = useReducer(toDoReducer, [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ]);

  const handleDelete = (itemId) => {
    // setToDos(toDos.filter((item) => item.id !== itemId));

    dispatch({
      type: "deleted",
      id: itemId,
    });
  };

  const handleEditToDo = (item) => {
    // const updatedToDos = toDos.map((toDo) => {
    //   if (item.id === toDo.id) {
    //     return { ...toDo, text: item.text };
    //   } else {
    //     return toDo;
    //   }
    // });
    // setToDos(updatedToDos);

    dispatch({
      type: "edited",
      toDo: item,
    });
  };

  const handleAddToDo = (e) => {
    console.log(e);
    e.preventDefault();
    // setToDos([
    //   ...toDos,
    //   {
    //     id: toDos.length + 1,
    //     text: e.target.todo.value,
    //     done: false,
    //   },
    // ]);

    dispatch({
      type: "added",
      text: e.target.todo.value,
    });
  };

  return (
    <Wrapper>
      <NewTask onSubmit={handleAddToDo}>
        <input type="text" name="todo" placeholder="Add Task"></input>
        <button>Add</button>
      </NewTask>
      <ToDoList
        toDos={toDos}
        onEditToDo={handleEditToDo}
        onAddToDo={handleAddToDo}
        onDeleteToDo={handleDelete}
      ></ToDoList>
    </Wrapper>
  );
}

const NewTask = styled.form`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 10px;
`;
const Wrapper = styled.ul`
  display: grid;
  gap: 10px;
`;
