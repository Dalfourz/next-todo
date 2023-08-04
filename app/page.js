import CreateTodo from "@/components/CreateTodo";
import ToDoList from "@/components/TodoList";

export default function Home() {
  return (
    <>
      <main className="container">
        <ToDoList />
        <CreateTodo />
      </main>
    </>
  );
}
