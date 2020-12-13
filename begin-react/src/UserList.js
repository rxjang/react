import React from 'react';

function User({user}){
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    );
}

function UserList(){
    const users=[
        {
            id:1,
            username: 'seohyun',
            email:'rxforp@naver.com'
        },
        {
            id:2,
            username: 'ruixian',
            email:'jangsh311@naver.com'
        },
        {
            id:3,
            username: 'shj',
            email:'ruixian@example.com'
        },
    ];

    return (
        <div>
            {
                users.map((user,index)=>(<User user={user} key={index}/>))
            }
        </div>
    )
}

export default UserList;