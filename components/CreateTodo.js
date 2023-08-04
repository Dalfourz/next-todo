"use client";
import { useState } from "react";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";

export default function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
  });

  async function handleSubmit() {
    const docRef = await addDoc(collection(db, "todos"), todo);
    setTodo({
      title: "",
      detail: "",
    });
  }

  return (
    <>
      <form>
        <label htmlFor="">Title:</label>
        <br />
        <input
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          type="text"
          value={todo.title}
        ></input>
        <br />
        <label htmlFor="">Detail:</label>
        <br />
        <textarea
          onChange={(e) => setTodo({ ...todo, detail: e.target.value })}
          name=""
          id=""
          cols="30"
          rows="10"
          value={todo.detail}
        ></textarea>
      </form>
      <button onClick={handleSubmit}>Add Todo</button>
      <br />
      <p>{JSON.stringify(todo)}</p>
    </>
  );
}
