import { useState, createContext, useEffect} from 'react';
import ToDoList from './components/todo-list/ToDoList';
import Modal from './components/modal/modal';
import { useLocalStorage } from './utils/useLocalStorage';
import './App.css'

export const ToDoContext = createContext()

function App() {

const [openModal, setOpenModal] = useState(false);
const [toDoList, setToDoList] = useLocalStorage('todo', [])

const value = [toDoList, setToDoList]

useEffect(()=>(
 toDoList!==undefined? localStorage.setItem('todo', JSON.stringify(toDoList)): setToDoList([])
), [toDoList])

  return (
    <>
    <ToDoContext.Provider value={value}>
      <Modal openModal={openModal} setOpenModal={setOpenModal}/>
      <div className="app__container">
        <ToDoList setOpenModal={setOpenModal}/>
        </div>
      </ToDoContext.Provider>
    </>
  )
}

export default App
