import { useEffect, useState } from "react";
import useStore, { Note } from "../StateManagement";
import { colors, getDate } from "./util";

export default function EditModel({
    data,
    hand,
}: {
    data: Note;
    hand: () => void;
}) {
    const [editData, setEditData] = useState({ ...data });
    const [selectColorAtive, setSelectColorActive] = useState(false);
    const [selectColor, setSelectColor] = useState(data.style);

    const store = useStore();
    function handleSubmit() {
        store.editNote({
            id: data.id,
            content: editData.content,
            style: selectColor,
            date: getDate(),
        });
    }
    function deletenote() {
        store.deleteNote(data.id);
    }
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <>
            <div
                className={`flex body fixed top-0 h-screen w-full z-[150]  items-center justify-center transition-all duration-75 ease-linear ${visible ? "scale-100" : "scale-0"
                    } `}
            >
                <div
                    className={`card aspect-square  ${selectColor} min-w-0 md:min-w-[600px] max-w-[800px] max-h-[800px] z-[300] m-5 rounded-xl shadow-lg p-10 flex flex-col justify-between transition-all duration-75 ease-linear`}
                >
                    <div className="body text-2xl md:pt-10 leading-relaxed">
                        <textarea
                            className="w-full h-full min-h-56 md:min-h-96 bg-inherit no-scrollbar focus:outline-none"
                            name="content"
                            id="content"
                            value={editData.content}
                            onChange={(e) =>
                                setEditData((prev) => ({ ...prev, content: e.target.value }))
                            }
                        ></textarea>
                    </div>
                    <div className="card-bottom mt-2 lg:mt-5 flex items-center justify-between">
                        <div className="date">{data.date}</div>
                        <div className="flex gap-1 md:gap-3">
                            <div
                                onClick={() => {
                                    setSelectColorActive((prev) => !prev);
                                }}
                                className={`relative edit-btn aspect-square p-4 md:p-4 shadow-lg border-sky-100 border-[0.8rem] ${selectColor} rounded-full  cursor-pointer`}
                            >
                                {selectColorAtive && (
                                    <>
                                        <div
                                            className={`absolute  top-14 -right-24 animate-slide-left color-select flex  gap-2 bg-white rounded-3xl p-2 transition-all duration-300 ease-linear border-gray-300 border-2 ${selectColorAtive ? "scale-100" : "scale-0"}`}
                                        >
                                            {colors.map((ele, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => setSelectColor(ele)}
                                                    className={`aspect-square p-4 hover:shadow-xl hover:scale-110 transition-all duration-75 ease-linear rounded-full ${ele}`}
                                                ></div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div
                                onClick={() => {
                                    deletenote();

                                    setVisible(false);
                                    hand();
                                }}
                                className="edit-btn px-3 py-2 md:px-5 md:py-4 rounded-full bg-gray-700 hover:bg-gray-900 transition duration-100 ease-linear cursor-pointer"
                            >
                                <i className="bx bxs-message-square-x text-white"></i>
                            </div>
                            <div
                                onClick={() => {
                                    handleSubmit();

                                    setVisible(false);

                                    hand();
                                }}
                                className="edit-btn px-3 py-2 md:px-5 md:py-4  rounded-full bg-gray-700 hover:bg-gray-900 transition duration-100 ease-linear cursor-pointer"
                            >
                                <i className="bx bxs-navigation text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="body fixed h-screen w-full z-[-100] backdrop-blur-sm "
                    onClick={() => {
                        handleSubmit();
                        setVisible(false);

                        hand();
                    }}
                ></div>
            </div>
        </>
    );
}
