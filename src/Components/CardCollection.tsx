import React from "react";
import useStore, { Note } from "../StateManagement";

import {
    DndContext,
    closestCorners,
    useSensors,
    useSensor,
    PointerSensor,
    KeyboardSensor,
} from "@dnd-kit/core";
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import Card from "./Card";

export default function CardCollection({
    Notes,
    openEditModel,
}: {
    Notes: Note[];
    openEditModel: (Note: Note) => void;
}) {
    const getPosition = (id: string) => Notes.findIndex((note) => note.id === id);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const { sortNotes } = useStore();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    function handleDrag(e) {
        const { active, over } = e;
        if (active.id === over.id) return;
        console.log(Notes);
        const sortingNotes = () => {
            const originalPosition = getPosition(active.id);
            const newPosition = getPosition(over.id);
            return arrayMove(Notes, originalPosition, newPosition);
        };
        sortNotes(sortingNotes());
    }
    const sensors = useSensors(
        useSensor(PointerSensor, {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            activationConstraint: { delay: 150 },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );
    return (
        <>
            <DndContext
                sensors={sensors}
                onDragEnd={handleDrag}
                collisionDetection={closestCorners}
            >
                <div className="containers max-w-[1700px] mx-auto md:pl-28">
                    <div className="Card-collection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 py-10 md:py-20 px-10">
                        <SortableContext items={Notes}>
                            {Notes.map((ele: Note) => (
                                <React.Fragment key={ele.id}>
                                    <Card data={ele} callEditModel={openEditModel} />
                                    {/* <DragBox /> */}
                                </React.Fragment>
                            ))}
                        </SortableContext>
                    </div>
                </div>
            </DndContext>
        </>
    );
}
