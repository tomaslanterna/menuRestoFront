import React,{createContext,useState} from 'react'

const mesaContext=createContext({});

export const MesaProvider = ({children}) => {

    const [mesaId, setMesaId] = useState(0);

    const setMesa=(mesaId)=>{
        setMesaId(mesaId)
    }

    const cleanMesa=()=>{
        setMesaId(0)
    }
  return (
    <mesaContext.Provider value={{setMesa,cleanMesa}}>
        {children}
    </mesaContext.Provider>
  )
}

export default mesaContext

