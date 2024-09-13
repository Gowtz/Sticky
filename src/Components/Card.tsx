import { Note } from "../StateManagement";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Card({
    data,

    callEditModel,
}: {
    data: Note;
    callEditModel: (Note: Note) => void;
}) {
    
    // ------- dnd kit ------
    const { attributes, listeners, transform, transition, setNodeRef } =
        useSortable({ id: data.id! });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };
    // -----------------------

    function handleEdit() {
        callEditModel(data);
    }

    return (
        <div
            onClick={() => handleEdit()}
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className={`card aspect-square  ${data?.style}  rounded-xl shadow-lg p-10 flex flex-col md:hover:shadow-xl transition-all duration-75 ease-out justify-between`}
        >
            <div className="body text-xl leading-relaxed line-clamp-3 lg:line-clamp-3">
                {data?.content}
                {!data.content && (
                    <>
                        <p className="text-gray-500 text-2xl"> 📋 NewNote Type ...</p>
                    </>
                )}
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
