import { useState } from "react";
import Navbar from "./Components/Navbar";
import useStore from "./StateManagement";
import { Note } from "./StateManagement";
import EditModel from "./Components/EditModel";
import CardCollection from "./Components/CardCollection";
export default function App() {
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
  const { Notes ,addNote}  = useStore();
  const [edit, setEdit] = useState<boolean>(false);
    const [cardData,setCardData] = useState<any>(null)
    function openEditModel(data:Note,nid:number){
        setCardData({...data})
        setEdit(true)

    }
    function close(){
        setEdit(false)
        setCardData(null)
    }
    // addNote({content:"Some Randome",date:getDate(),style:randomColor()})
  return (
    <>
      {edit && <EditModel  data={cardData} hand={close} status={edit}/>}
        <div className="relative">
        <Navbar add={addNote}/>
        <CardCollection Notes={Notes} openEditModel={openEditModel}/>
</div>

    </>
  );
}
