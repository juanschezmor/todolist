
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
  console.log(Activities)
  
  
 
  const addTask = (tarea) => {
    setActivity([...Activities,tarea])
  }
  const removeTask = (e) => {
    
    
    setActivity(current => current.filter(act => {
      const buttonid = e.target.parentNode.parentNode.getAttribute('id')
      console.log(act.activityid)
      console.log(buttonid)
      return act.activityid != buttonid  ;
    })
  )}
  const ModalShowup = () =>{
    console.log(Estadomodal)
    setEstadomodal(!Estadomodal)

  }
  const editTask = () => {


  }
  
 
  
  return (
    <div className="bg-zinc-300 h-screen">
      <Header />
      <EditModal Estadomodal={Estadomodal} setEstadomodal={setEstadomodal} editTask={editTask}nowdate={nowdate}activityid={activityid}/>
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
