import { useState } from "react";


export const Form = ({ addTask,editTask ,nowdate,activityid, boton }) => {
  
  
  /*const [input, setInput] = useState({
    titulo:"",
    texto:"",
    fecha: nowdate,
    activityid : activityid
  });*/
  const [titulo,setTitulo] = useState("")
  const [texto,setTexto] = useState("")
  
  
  /*const handleChange = (e) => {
    if (e.target.name == "titulo") {
      input.titulo = e.target.value;
    }
    if (e.target.name == "texto") {
      input.texto = e.target.value;
    }
    input.fecha = nowdate;
    input.activityid = activityid;
  

    
  };
  */
  const handleClick = (event) => {
    event.preventDefault();

    if(boton == "Add"){
    const input = {titulo,texto,fecha : nowdate,
      activityid : activityid }
    
    //setInput({titulo:"",texto:""});
    console.log(input)
    addTask (input)
  }
  else if(boton == "Edit"){
      
      editTask(titulo,texto)
  }
    
  };
  

  return (
    <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mt-5">
      <form id="form" onSubmit={handleClick}>
        <div >
          <label>
            Titulo:
            <input value={titulo} className="border border-gray-400 rounded-lg ml-3"type="text" name="titulo" onChange={(e)=> setTitulo(e.target.value)} required />
          </label>
        </div>
        <div className="mt-2">
          <label>
            Descripcion:
            <input value={texto} className="border border-gray-400 rounded-lg ml-3" type="text" name="texto" onChange={(e)=> setTexto(e.target.value)} required />
          </label>
        </div>
        <div className="form-example">
         
         <button
            className=" bg-transparent mt-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            
            type="submit"
          >
            {boton}
          </button> 
          
        </div>
      </form>
    </div>
  );
};
