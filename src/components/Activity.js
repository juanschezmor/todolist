

export const Activity = ({activityid,titulo,texto,fecha,editTask,removeTask,ModalShowup}) => {
  
    return ( <>
    <div id={activityid} className="flex justify-between flex-col bg-cyan-300 max-h-56 max-w-sm w-52 m-10 rounded-md overflow-hidden shadow-lg">
        <div>
          <h1 className=" mt-4 font-semibold text-xl mb-2 text-center border-b-gray-400">
            {titulo}
          </h1>
          <div className="flex p-4 ">
            <p className=" text-gray-700 text-base">
              {texto}
            </p>
          </div>
        </div>
        <div>
        <span className=" mt-5 ml-2 inline-block text-gray-700 text-sm ">{fecha}</span>
        </div>
        <div className="flex justify-between mb-2">
        <button id={activityid} onClick={ModalShowup} className="ml-3 border border-teal-900 rounded-lg p-2"> Editar</button>
        <button id={activityid} onClick={removeTask} className="mr-3 border border-teal-900 rounded-lg p-2"> Borrar</button>
      
        </div>
        </div>
    </>

    )

}