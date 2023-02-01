import { createContext, useContext, useReducer, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from "./authContext";

export const ChatContext = createContext();


export const ChatContextProvider = ({ children }) => {
    const {currentUser} = useContext(AuthContext)
  const INITIAL_STATE = {
    chatId: 'null',
    user: {}
  }

  const chatReduser = (state, action) => {
    switch(action.type){
        case 'CHANGE_USER': 
        return {
            user: action.payload,
            chatId :   currentUser.uid > action.payload.uid
            ? currentUser.uid + action.payload.uid
            : action.payload.uid + currentUser.uid
        } 
        default:
            return state;

    } 
  }
const [state, dispatch] = useReducer(chatReduser, INITIAL_STATE);
  return (
    <ChatContext.Provider value={{data:state, dispatch}}>
      {children}

    </ChatContext.Provider>
  )

}     