import { useState } from "react";
import Navbar from "./Components/Navbar";
import useStore from "./StateManagement";
import { Note } from "./StateManagement";
import EditModel from "./Components/EditModel";
import CardCollection from "./Components/CardCollection";
export default function App() {
  const { Notes, addNote } = useStore();
  const [edit, setEdit] = useState<boolean>(false);
  const [cardData, setCardData] = useState<Note | null>(null);

  // Open and close EditModel
  function openEditModel(data: Note) {
    setCardData({ ...data });
    setEdit(true);
  }
  function close() {
    setEdit(false);
    setCardData(null);
  }

  // addNote({content:"Some Randome",date:getDate(),style:randomColor()})
  return (
    <>
      {edit && <EditModel data={cardData!} hand={close} />}
      <div className="relative">
        <Navbar add={addNote} />
        <CardCollection Notes={Notes} openEditModel={openEditModel} />
      </div>
    </>
  );
}
