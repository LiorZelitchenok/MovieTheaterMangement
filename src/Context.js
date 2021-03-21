import React, {useState, createContext} from 'react'

export const AppContext = createContext();

export const AppContextProvider = props =>
{
    const [globalState, setGlobalState] = useState({users:{},movies:{},members:{},isAdmin:false,currentUser:{},editUser:{},subscriptions:{}})
  

    return(
        <AppContext.Provider value={[globalState,setGlobalState]}>
            {props.children}
        </AppContext.Provider>
    )
}