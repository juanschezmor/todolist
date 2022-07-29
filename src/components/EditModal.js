
import {Form} from "./Form"
export const EditModal = ( Estadomodal,setEstadomodal,editTask,nowdate,activityid) => {
  const handleClose = () => {
    console.log("Pulsado");
  };

  if(Estadomodal){
    return (
    <>
    
      <div className="bg-gray-600 bg-opacity-60 w-screen h-screen fixed z-40 flex p-8 items-center justify-center">
        <div className="w-3/6 min-h-min bg-white relative border-r-3 shadow-md p-5">
          <div className="flex flex-row justify-between items-center pb-2 mb-2 border-b-teal-400 border">
            <h1>Editar</h1>
            <img
              src="https://img.icons8.com/ios/100/multiply.png"
              className="w-6 h-6 mr-5 mt-3 hover:bg-slate-500"
              onClick={handleClose}
            ></img>
          </div>
          <Form editTask={editTask} nowdate={nowdate} activityid={activityid} boton="Edit"/> 
          
            
           
        </div>
      </div>
</>
  );}
};
