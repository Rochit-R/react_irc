import React,{useEffect,useState} from 'react'
import { getAllUsers } from '../services/UserApi';

const User = () => {
    const[userList,setUserList]=useState([]);
    useEffect(()=>{
        const fetchData=()=>getAllUsers().then((res)=>setUserList(res.data)).catch((error)=>console.log(error));
        fetchData();
    },[])
  return (
    <React.Fragment>
        {
            userList.length>0?(
                userList.map((user)=>(
                    <p key={user.id}>{user.name}</p>
                ))
            ):(
                <p>Loading...</p>
            )
        }
    </React.Fragment>
  )
}

export default User;