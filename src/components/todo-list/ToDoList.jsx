import {useContext, useState, useEffect } from "react";
import { ToDoContext } from "../../App";

import "./todolist.css";


function ToDoList({setOpenModal}) {
  const [toDoList, setToDoList] = useContext(ToDoContext);
  const [list, setList] = useState("");

  useEffect(()=>{
    const localToDo = localStorage.getItem('todo');

    if(localToDo!==null){
    const arr = localToDo.split(',')
    setList(arr)
    }
  }, [toDoList])

  const openModal = ()=>{
    setOpenModal(true)
  }


  return (
    <div className="ToDo">
      <div className="ToDo__container">
        <h1>To Do</h1>
        <div className="ToDo__container-list">
          {list === "" ? (
            <p className="ToDo__list-empty">
              Well done! No more tasks to do. Enjoy yourself!
            </p>
          ) : (
            list.map((item, index) => (
              <div key={index}>
                 <p className="ToDo__list-empty">{item}</p>
              </div>
            ))
          )}
          <p className="add__item" onClick={openModal}>
          <span >+</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
