import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useLoginMutation } from '../features/api/apiAuth';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login]=useLoginMutation();
  const dispatch = useDispatch();

  const  handleLogin = async () => {
    try{
    const {data,error}:any =await  
    login({username,password});
    if(data)
    {
      console.log(data)
    }
    else
    {
      console.log(error)

    }
    }
    catch(error:any){
      console.log(error)
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border p-2 mb-4"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border p-2 mb-4"
      />
      
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">
        Login
      </button>
    </div>
  );
};

export default Login;
