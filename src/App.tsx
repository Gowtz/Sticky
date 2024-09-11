import Card from "./Components/Card";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <>
      <div className="relative">
        <Navbar />

        <div className="containers max-w-[1700px] mx-auto md:pl-28">
          <div className="Card-collection grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 py-10 md:py-20 px-10">
            <Card color={"bg-green-300"} />
            <Card color={"bg-red-300"} />
            <Card color={"bg-teal-300"} />
            <Card color={"bg-yellow-200"} />
            <Card color={"bg-blue-200"} />
            <Card color={"bg-lime-300"} />
            <Card color={"bg-emerald-300"} />
            <Card color={"bg-cyan-300"} />
            <Card color={"bg-indigo-300"} />
            <Card color={"bg-violet-300"} />
            <Card color={"bg-purple-300"} />
            <Card color={"bg-fuchsia-300"} />
            <Card color={"bg-pink-300"} />
            <Card color={"bg-rose-300"} />
          </div>
        </div>
      </div>
    </>
  );
}
