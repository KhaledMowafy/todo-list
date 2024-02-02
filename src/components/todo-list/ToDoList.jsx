import { useContext, useState, useEffect } from "react";
import { ToDoContext } from "../../App";
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import "./todolist.css";

function ToDoList({ setOpenModal }) {
  const [toDoList, setToDoList] = useContext(ToDoContext);
  const [list, setList] = useState("");
 

  useEffect(() => {
        setList([...toDoList])
    
  }, [toDoList]);

  const openModal = () => {
    setOpenModal(true);
  };

  const handleDelete = (index) => {
    const arr = list;
    arr.splice(index, 1);
    setToDoList(arr);
    if(arr.length===0){
        setList("")
        setToDoList("")
    }
  };

  const handleComplete = ( index) => {
    document.getElementById(`item-${index}`).style.textDecoration ="line-through"
    document.getElementById(`item-${index}`).classList.add('fall');
    setTimeout(()=>handleDelete(index), 800)
    setTimeout(()=>{
        document.getElementById(`item-${index}`).style.textDecoration ="none"
        document.getElementById(`item-${index}`).classList.remove('fall');
        }, 801)
    
  };

  return (
    <div className="ToDo">
      <div className="ToDo__container">
        <h1>To Do</h1>
        <div className="ToDo__container-list">
          {list.length===0 ? (
            <p className="ToDo__list-empty">
              Well done! No more tasks to do. Enjoy yourself!
            </p>
          ) : (
            list.map((item, index) => (
             
                <div className="todo__item-container" key={index} id={`item-${index}`}>
                  <p className="ToDo__list-empty" >
                    {item.title}
                  </p>
                  <p className="ToDo__list-empty" >
                    {item.description}
                  </p>
                  <div className="todo__icons">
                    <span onClick={() => handleComplete( index)}>
                      <FaCheck color="white" />
                    </span>
                    <span onClick={() => handleDelete(index)}>
                      <MdDelete color="white" />
                    </span>
                  </div>
                </div>
            ))
          )}
          <p className="add__item" onClick={openModal}>
            <span>+</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
