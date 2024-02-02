import {  useContext, useState } from "react";
import { ToDoContext } from '../../App';
import './modal.css';


function Modal({openModal, setOpenModal}) {
    const [toDo, setToDo] = useState('');
    const [desc, setDesc] = useState('');
    const [toDoList, setToDoList] = useContext(ToDoContext);

    const handleToDo= (e)=>{
        setToDo(e.target.value);
    }
    const handleDesc = (e)=>{
        setDesc(e.target.value)
    }

    const handleSave = ()=>{
       const object = {
        "title": toDo,
        "description": desc
    }
       setToDoList([...toDoList, object])
       setDesc('');
       setToDo('');
       setOpenModal(false);
    }
  return (
    <div className="modal" style={{display:openModal?"flex":"none"}}>
          <div className="modal__container">
            <span className="close" onClick={()=>setOpenModal(false)}>X</span>
            <input type="text" placeholder="todo" onChange={handleToDo} value={toDo}/>
            <input type="text" placeholder="description" onChange={handleDesc} value={desc}/>
            <button onClick={handleSave}>save</button>
            </div>
        </div>
  )
}

export default Modal
