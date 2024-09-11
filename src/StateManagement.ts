import { create } from "zustand";

export type Note = {
  content: string;
  date: string;
  style: string;
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
    console.log(data);
    set((state:{Notes:Note[]}) => ({ Notes: [data, ...state.Notes] }));
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
    useStore.getState().persistStorage(get().Notes);
  },

  deleteNote: (id: number) => {
    set((state: { Notes: Note[] }) => {
      const newData = state.Notes.filter(
         // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
        (ele: Note, index: number) => index != id
      );
       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
      useStore.getState().persistStorage(newData);
      return({Notes:newData})
    });
  },

  getOneNotes: (id: number) => {
    set((state: { Notes: Note[] }) => {
       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
    const oneNote = state.Notes.find((ele: Note, index: number) => index == id);
    return oneNote;
    })
  },

  editNote: (id: number, data: Note) => {
    set((state: { Notes: Note[] }) => {
      const newNote = state.Notes.map((ele: Note, index: number) => {
        return index === id ? { ...data } : ele;
      });
       // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-expect-error 
      useStore.getState().persistStorage(newNote);
      return({Notes:newNote})
    });
  },
}));

export default useStore;
