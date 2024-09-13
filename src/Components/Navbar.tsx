import { getDate, randomColor } from "./util";

export default function Navbar({ add }:any) {
  function newNote() {
    add({ style: randomColor(), date: getDate() });
  }
  return (
    <>
      <header className="w-28 z-10 h-screen float-left overflow-y-hidden fixed top-0 bg-gray-200 hidden md:block">
        <nav className="flex  flex-col items-center justify-between py-10 h-full w-full">
          <div className="logo font-bold text-xl">Sticky</div>
          <div
            onClick={() => {
              newNote();
            }}
            className="bg-zinc-700 py-5 px-6 rounded-[50%] transition-all duration-75  hover:rounded-xl cursor-pointer "
          >
            <i className="bx bx-plus text-white"></i>
          </div>
        </nav>
      </header>

      <div
        onClick={() => {
          newNote();
        }}
        className="new-note text-2xl p-5  m-3  bg-gray-300 rounded-lg md:hidden"
      >
        New Note
      </div>
    </>
  );
}
