import React, { useEffect, useState } from 'react'
import Message from '../components/message.js'
import { useContext } from 'react'
import { onSnapshot, doc } from 'firebase/firestore'
import { ChatContext } from '../context/chatContext.js'
import {db} from '../firebase'
function Messages(){
    const [messages, setMessages] = useState([])
    const {data} = useContext(ChatContext)

    useEffect (() => {
        const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc)=> {
            doc.exists() && setMessages(doc.data().messages)
        })
        return () => {
            unSub()
        }
    },[data.chatId])
    return(
        <div className='messages'>

            {messages.map(m => (
                   <Message message = {m} key = {m.id}/>
            ))}
     
            

        </div>
    )
}

export default Messages