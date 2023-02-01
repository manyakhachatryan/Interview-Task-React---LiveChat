import React from 'react'
import Add from '../img/add.png'
import More from '../img/more.png'
import Cam from '../img/cam.png'
import Messages from '../components/messages.js'
import Input from '../components/input.js'
import { ChatContext } from '../context/chatContext'
import { useContext } from 'react'
function Chat(){

    const {data} = useContext(ChatContext)
    console.log(data.user)
    return(
        <div className='chat' >
           <div className='chatInfo'>
                 <span>{data.user?.displayName}</span> 
                 <div className='chatIcons'>
                    <img src = {Add} alt = ''/>
                    <img src = {Cam} alt = ''/>
                    <img src = {More} alt = ''/>
                 </div>
           </div>
           <Messages/>
           <Input/>
        </div>
    )
}

export default Chat