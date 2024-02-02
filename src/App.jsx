import { useState, createContext } from 'react';
import ToDoList from './components/todo-list/ToDoList';
import Modal from './components/modal/modal';
import './App.css'

export const ToDoContext = createContext()

function App() {

const [openModal, setOpenModal] = useState(false);
const [toDoList, setToDoList] = useState([]);

const value = [toDoList, setToDoList]

  return (
    <>
    <ToDoContext.Provider value={value}>
      <Modal openModal={openModal} setOpenModal={setOpenModal}/>
      <div className="app__container">
        <ToDoList setOpenModal={setOpenModal}/>
        <ToDoList/>
      </div>
      </ToDoContext.Provider>
    </>
  )
}

export default App
