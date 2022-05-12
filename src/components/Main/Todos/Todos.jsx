import React from "react";
import Todo from "./Todo/Todo";

export default function Todos({ todos, setTodos }) {
  return (
    <div>
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}
