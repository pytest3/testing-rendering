import styled from "styled-components";
import { useState } from "react";

export default function ToDoList({
  toDos,
  onEditToDo,
  onDeleteToDo,
  onAddToDo,
}) {
  return toDos.map((item) => (
    <ToDoItem
      key={item.id}
      item={item}
      onDelete={onDeleteToDo}
      onAdd={onAddToDo}
      onEdit={onEditToDo}
    />
  ));
}

function ToDoItem({ item, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Wrapper>
      <input type="checkbox"></input>
      {isEditing ? (
        <>
          <input
            value={item.text}
            onChange={(e) => onEdit({ ...item, text: e.target.value })}
          ></input>
          <button onClick={() => setIsEditing(false)}>Save</button>
        </>
      ) : (
        <>
          <p>{item.text}</p>
          <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
        </>
      )}
      <button onClick={onDelete}>Delete</button>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: 50px 1fr 0.5fr 0.5fr; /* how to make buttons same width? */
  gap: 10px 10px;
`;
