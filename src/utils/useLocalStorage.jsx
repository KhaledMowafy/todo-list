import {useState, useRef, useEffect} from 'react';

export function useLocalStorage(
    key, 
    defaultValue='',
    {serialize = JSON.stringify, deserialize = JSON.parse} = {},
  ){
  
    const [state, setState] = useState(()=>{
      
      const valueInLocalStorage = window.localStorage.getItem(key)
      if(valueInLocalStorage){
        return deserialize(valueInLocalStorage)
      }
      return defaultValue;
    })
  
   const prevKeyRef = useRef(key)
  
    useEffect(()=>{
      const previousKey = prevKeyRef.current
      if(previousKey !== key){
        localStorage.removeItem(previousKey);
      }
      prevKeyRef.current=key;
  
      window.localStorage.setItem(key, serialize(state))
    },[key, state, serialize])
  
    return [state, setState];
  }