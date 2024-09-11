import { useState } from "react";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import useStore from "./StateManagement";
import { Note } from "./StateManagement";
import EditModel from "./Components/EditModel";
export default function App() {
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
  const { Notes ,addNote}  = useStore();
  const [edit, setEdit] = useState<boolean>(false);
    const [cardData,setCardData] = useState<any>(null)
    function openEditModel(data:Note,nid:number){
        setCardData({...data,nid})
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

        <div className="containers max-w-[1700px] mx-auto md:pl-28">
          <div className="Card-collection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 py-10 md:py-20 px-10">
            {Notes.map((ele: Note, index: number) => (
              <Card key={index} nid={index} data={ele} callEditModel={openEditModel}/>
            ))}
           
          </div>
        </div>
      </div>
    </>
  );
}
