import { signOut } from 'firebase/auth'
import React from 'react'
 import { AuthContext } from '../context/authContext'
import { auth } from '../firebase'
 import { useContext } from 'react'
function Navbar(){
const {currentUser} = useContext(AuthContext)
console.log("currentUser",currentUser)
    return(
        <div className='navbar'>
            <span className='logo'>Manya chat</span>
            <div className='user'>
                <img src = {currentUser.photoURL} alt = '' />
                <span>{currentUser.displayName}</span>
             
                <button onClick = {()=>signOut(auth)} >logout</button>
            </div>
        </div>
    )
}

export default Navbar