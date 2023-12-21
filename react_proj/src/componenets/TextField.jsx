import { saveUser } from '../services/UserApi';
import {useState} from 'react';
const TextField = () => {
    const[name,setName]=useState('');
    const handleChangeEvent=(event)=>{
        setName(event.target.value);
    }
        const saveData=()=>{
            saveUser({
                name:name
            });
    }
  return (
    <div>
        <input type="text" name="username" id="username" onChange={handleChangeEvent}/>
        <button onClick={saveData}>Save</button>
    </div>
  )
}

export default TextField;