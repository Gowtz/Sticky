export default function Card( {color}:{color:string}) {
  return (
    <div className={`card aspect-square  ${color}  rounded-xl shadow-lg p-10 flex flex-col justify-between`}>
      <div className="body text-xl leading-relaxed line-clamp-3 lg:line-clamp-3">
        Hello world ipsum dolor sit amet consectetur adipisicing elit. Nulla vel
        excepturi nostrum fugiat deleniti delectus earum, pariatur corporis eos
        ad, sint iure deserunt consequuntur tempore dolorum expedita nihil
        repellendus maxime!
      </div>
            <div className="card-bottom mt-5 flex items-center justify-between">
                <div className="date">
                    28 Aug 2002
                </div>
                <div className="edit-btn px-5 py-4 rounded-full bg-gray-700 hover:bg-gray-900 transition duration-100 ease-linear cursor-pointer">
<i className='bx bxs-pencil text-white'></i>
                </div>

            </div>
    </div>
  );
}
