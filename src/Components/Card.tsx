import { Note } from "../StateManagement";

export default function Card({
  data,
  nid,
  callEditModel,
}: {
  data: Note;
  nid: number;
  callEditModel: any;
}) {
  function handleEdit() {
    callEditModel(data, nid);
  }
  return (
    <div onClick={()=> handleEdit()}
      className={`card aspect-square  ${data?.style}  rounded-xl shadow-lg p-10 flex flex-col justify-between`}
    >
      <div className="body text-xl leading-relaxed line-clamp-3 lg:line-clamp-3">
        {data?.content}
        {!data.content && <><p className="text-gray-500 text-2xl"> 📋 NewNote Type ...</p></>}
      </div>
      <div className="card-bottom mt-5 flex items-center justify-between">
        <div className="date">{data.date}</div>
        <div
          onClick={handleEdit}
          className="edit-btn px-5 py-4 rounded-full bg-gray-700 hover:bg-gray-900 transition duration-100 ease-linear cursor-pointer"
        >
          <i className="bx bxs-pencil text-white"></i>
        </div>
      </div>
    </div>
  );
}
