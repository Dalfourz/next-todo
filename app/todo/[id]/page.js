import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";

export default async function Todo({ params: { id } }) {
  const docSnap = await getDoc(doc(db, "todos", id));
  const data = (await docSnap).data();

  return (
    <div>
      <h1>Todo Title: {data.title}</h1>
      <h3>Detail: {data.detail}</h3>
    </div>
  );
}