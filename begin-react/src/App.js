import React, {useState, useRef,useMemo} from 'react';
import CreateUser from './CreateUser';
import UserList from './UserList';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user=>user.active).length;
}

function App() {
  const[inputs,setInputs]=useState({
    username:'',
    email:'',
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
        email:'rxforp@naver.com',
        active:true
    },
    {
        id:2,
        username: 'ruixian',
        email:'jangsh311@naver.com',
        active:false
    },
    {
        id:3,
        username: 'shj',
        email:'ruixian@example.com',
        active:false
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
};

const onRemove=id=>{
  setUsers(users.filter(user=>user.id!==id));
};

const onToggle=id=>{
  setUsers(users.map(
    user=>user.id===id
    ? {...user, active: !user.active} 
    : user
  ));
};

  const count= useMemo(()=>countActiveUsers(users),[users]);

  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>활성 사용자 수: {count}</div>
    </>
  );
}

export default App;
