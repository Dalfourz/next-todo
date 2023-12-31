"use client";
import { db } from "@/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ToDoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      console.log(snapshot);
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title,
            details: doc.data().detail,
          };
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <div>
        <h1>Todos</h1>
        <ul className="todoList">
          {todos.map((todo) => {
            return (
              <Link
              key={todo.id} href={`/todo/${todo.id}`}>
                <li className="listItem">
                  {todo.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
}
