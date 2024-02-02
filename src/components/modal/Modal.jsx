import {  useContext, useState } from "react";
import { ToDoContext } from '../../App';
import './modal.css';


function Modal({openModal, setOpenModal}) {
    const [toDo, setToDo] = useState('');
    const [, setToDoList] = useContext(ToDoContext);

    const handleToDo= (e)=>{
        setToDo(e.target.value);
    }
    const handleSave = ()=>{
       const localToDo = localStorage.getItem('todo');
        if(localToDo===null){
            localStorage.setItem('todo', toDo)
            setToDoList([toDo])
            setOpenModal(false)
            setToDo('')
        }else{
            const arr = localToDo.split(',')
            setToDoList([...arr, toDo])
            localStorage.setItem('todo', [...arr, toDo]);
            setOpenModal(false)
            setToDo('')
        }
    }
  return (
    <div className="modal" style={{display:openModal?"flex":"none"}}>
          <div className="modal__container">
            <span className="close" onClick={()=>setOpenModal(false)}>X</span>
            <input type="text" placeholder="todo" onChange={handleToDo} value={toDo}/>
            <button onClick={handleSave}>save</button>
            </div>
        </div>
  )
}

export default Modal
