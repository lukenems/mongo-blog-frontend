import { createContext, useReducer } from "react";

export const PostContext = createContext();
export const postsReducer = (state, action) => {
  switch(action.type) {
    case 'GET_POSTS':
      return {
        posts: action.payload
      }
    case 'CREATE_POST':
      return {
        posts: [action.payload, ...state.posts]
      }
    default:
       return state
  }
}

export const PostContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    //original state established here
    posts: null
  })
  // dispatch({type:'', payload:[]})
  return (
    <PostContext.Provider value={{...state, dispatch}}>
      { children }
    </PostContext.Provider>
  )
}
