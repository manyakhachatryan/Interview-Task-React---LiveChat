import React from 'react'
function Chats(){
    return(
        <div className='chats' >
            <div className='userChats'>
                <img src = 'https://scontent-arn2-1.xx.fbcdn.net/v/t1.18169-9/10354948_1120622827968812_4929893616710021654_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Sbec7xvL0TYAX_Ykjou&_nc_ht=scontent-arn2-1.xx&oh=00_AfBD7dgz3yKXo-DbH90Gs0CacT08bONYUd_V2ds2WaegtA&oe=63E8CD80' alt = 'user Img'/>
                <div className='userChatInfo'>
                    <span>Jane</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Chats