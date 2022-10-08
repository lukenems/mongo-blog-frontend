import { createContext, useReducer } from "react";

export const AuthContext = createContext();
export const AuthReducer = (state, action) => {
  switch(action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      }
    case 'LOGOUT':
      return {
        user: null
      }
    default:
      return state
  }

};

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    //original state established here
    user: null
  })
  // dispatch({type:'', payload:[]})
  console.log(`Auth state: ${state}`)
  return (
    <AuthContext.Provider value={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}