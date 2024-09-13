import { create } from "zustand";

export type Note = {
    content: string;
    date: string;
    style: string;
    id: string;
};

export type UseStore = {
    Notes: Note[];
    persistStorage: (items: Note[]) => void;
    addNote: (data: Note) => void;
    deleteNote: (id: string) => void;
    getOneNotes: (id: string) => Note | undefined;
    editNote: (data: Note) => void;
    sortNotes: (data: Notes[]) => void;
};

const useStore = create<UseStore>((set, get) => ({
    Notes: JSON.parse(localStorage.getItem("notes")!) || [],

    persistStorage: (items: Note[]) => {
        localStorage.setItem("notes", JSON.stringify(items));
    },

    addNote: (data: Note) => {
        const newNote = { ...data, id: `CARD-NO-${get().Notes.length + 1}` };
        console.log(newNote);
        set((state: { Notes: Note[] }) => ({ Notes: [newNote, ...state.Notes] }));
        useStore.getState().persistStorage(get().Notes);
    },
    sortNotes: (data: Note[]) => {
        set(() => ({ Notes: data }));
        useStore.getState().persistStorage(get().Notes);
    },
    deleteNote: (id: string) => {
        set((state: { Notes: Note[] }) => {
            const newData = state.Notes.filter((ele: Note) => ele.id != id);
            useStore.getState().persistStorage(newData);
            return { Notes: newData };
        });
    },

    getOneNotes: (id: string) => {
        const oneNote = get().Notes.find((ele: Note) => ele.id == id);
        return oneNote;
    },

    editNote: (data: Note) => {
        set((state: { Notes: Note[] }) => {
            const newNote = state.Notes.map((ele: Note) => {
                return ele.id === data.id ? { ...ele, ...data } : ele;
            });
            useStore.getState().persistStorage(newNote);
            return { Notes: newNote };
        });
    },
}));

export default useStore;
