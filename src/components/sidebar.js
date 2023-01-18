import React from 'react'
import Navbar from './navbar'
import Search from './search'
import Chats  from './chats'
function Sidebar(){
    return(
        <div className='sidebar'>
          <Navbar/>
          <Search/>
          <Chats/>
        </div>
    )
}

export default Sidebar