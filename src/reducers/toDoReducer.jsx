export default function toDoReducer(toDos, action) {
  if (action.type === "added") {
    return [
      ...toDos,
      {
        id: toDos.length + 1,
        text: e.target.todo.value,
        done: false,
      },
    ];
  } else if (action.type === "edited") {
    return toDos.map((toDo) => {
      updated;
      if (action.toDo.id === toDo.id) {
        return { ...toDo, text: action.toDo.text };
      } else {
        return toDo;
      }
    });
  } else if (action.type === "deleted") {
    return toDos.filter((item) => item.id !== action.id);
  }
}
