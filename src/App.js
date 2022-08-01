
import "./App.css";
import { Header } from "./components/Header";
import randomColor from "randomcolor";
import React from "react";
import { useState } from "react";
import { Activity } from "./components/Activity";
import {Form} from './components/Form'
import moment from "moment";
import { v4 as uuid } from 'uuid';
import { EditModal } from "./components/EditModal";
import { act } from "react-dom/test-utils";
const randomcolor = randomColor();

function App() {
  
  
  const nowdate = moment().format("MMM Do YY");
  const activityid = uuid();
   
  const [Activities, setActivity] = useState([
    {
      activityid : "JSNjjsdauaiuq23846ashdja23163",
      titulo: "Laundry",
      texto: "I need to wash my clothes asap",
      fecha: nowdate,
    },
  ]);
  const [Estadomodal,setEstadomodal] = useState(false)
  const [EditID,setEditID] = useState("")
  console.log(Activities)
  
  
 
  const addTask = (tarea) => {
    setActivity([...Activities,tarea])
  }
  const removeTask = (e) => {
    
    
    setActivity(current => current.filter(act => {
      const buttonid = e.target.parentNode.parentNode.getAttribute('id')
      
      return act.activityid != buttonid  ;
    })
  )}
  const ModalShowup = (e) =>{
     
    setEstadomodal(!Estadomodal)
    setEditID(e.target.parentNode.parentNode.getAttribute('id'))
  }
  const closeModal = () =>{
    
    setEstadomodal(false)
  }
  
  const editTask = (titulo,texto) => {
    console.log(EditID)
    console.log("esta en proceso de editacion")
    Activities.forEach((act) => {
      
      if(act.activityid == EditID){
        console.log("encontrada")
        act.titulo = titulo
        act.texto = texto 
        closeModal()
      }
      
    })
    


  }
  
 console.log(Estadomodal)
  
  return (
    <div className="bg-zinc-300 w-screen h-screen">
      <Header />
      {Estadomodal && <EditModal Estadomodal={Estadomodal} closeModal={closeModal} editTask={editTask}nowdate={nowdate}activityid={activityid}/>}
      <div className="w-auto flex justify-center">
      
      <Form addTask={addTask} editTask={editTask} nowdate={nowdate} activityid={activityid} boton="Add"/>
      
      </div>
      <div className="h-screen w-screen flex flex-wrap">
      
        {Activities.map(function (activity,index) {
          return (
            <Activity
              activityid = {activity.activityid}
              key={index}
              titulo={activity.titulo}
              texto={activity.texto}
              fecha={activity.fecha}
              editTask = {editTask}
              removeTask = {removeTask}
              ModalShowup = {ModalShowup}
            />
          );
        })}
       
      </div>
     
      
        
      
    </div>
    
    
  );
  
}

export default App;
