import React, {useState, useRef} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function App() {
  const[inputs,setInputs]=useState({
    username:"",
    email:""
  });
  const {username,email}=inputs;
  const onChange=e=>{
    const{name,value}=e.target;
    setInputs({
      ...inputs,
      [name]:value
    });
  }
  const [users,setUsers]=useState([
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
]);

const nextId = useRef(4);

const onCreate=()=>{
  const user={
    id:nextId.current,
    username,
    email,
  };
  setUsers(users.concat(user))
  setInputs({
    username:'',
    email:''
  })
  nextId.current+=1;
}

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate}/>
      <UserList users={users}/>
    </>
  );
}

export default App;
