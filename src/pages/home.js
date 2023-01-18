import React from 'react'
import Sidebar from '../components/sidebar'
import Chat from '../components/chat'
// import '../../src/stylehome.css'
function Home(){
    return(
        <div className='home'>
            <div className='container'>
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}   

export default Home