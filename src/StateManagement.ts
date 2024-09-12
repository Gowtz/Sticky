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
  deleteNote: (id: number) => void;
  getOneNotes: (id: number) => Note | undefined;
  editNote: (id: number, data: Note) => void;
};

const useStore = create((set, get) => ({
  Notes: JSON.parse(localStorage.getItem("notes")!) || [],

  persistStorage: (items: Note[]) => {
    localStorage.setItem("notes", JSON.stringify(items));
  },

  addNote: (data: Note) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const newNote = { ...data, id: `CARD-NO-${get().Notes.length + 1}` };
    console.log(newNote);
    set((state: { Notes: Note[] }) => ({ Notes: [newNote, ...state.Notes] }));
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    useStore.getState().persistStorage(get().Notes);
  },
  sortNotes:(data:Note[])=>{
    set((state:{Notes:Note[]})=>({Notes:data}))
  },
  deleteNote: (id: string) => {
    set((state: { Notes: Note[] }) => {
      const newData = state.Notes.filter((ele: Note) => ele.id != id);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      useStore.getState().persistStorage(newData);
      return { Notes: newData };
    });
  },

  getOneNotes: (id: string) => {
    set((state: { Notes: Note[] }) => {
      const oneNote = state.Notes.find((ele: Note) => ele.id == id);
      return oneNote;
    });
  },


  editNote: (id: string, data: Note) => {
    set((state: { Notes: Note[] }) => {
      const newNote = state.Notes.map((ele: Note) => {
        return ele.id === id ? { ...ele, ...data } : ele;
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      useStore.getState().persistStorage(newNote);
      return { Notes: newNote };
    });
  },
}));

export default useStore;
