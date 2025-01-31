import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUpPage = ({setIsAuthenticated, setUsers}) => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate();

  const handlerSubmit = (event) =>{
    event.preventDefault();
    setIsAuthenticated(true)
    setUsers((preUser)=> [...preUser,{ username, email, pass}])
    navigate("/dashboard")
  };

  
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-10'>
      <div className='w-[23vw] border py-8 px-5 rounded-lg shadow-lg shadow-zinc-900/50 bg-white '>
        <div>
          <h1 className='text-3xl font-medium'>Sign Up</h1>
          <h1 className='text-lg font-normal mt-6 text-zinc-500 leading-5'>Welcome! Please create your account</h1>
        </div>
        <div>
        <form onSubmit={handlerSubmit} className='flex flex-col w-[24vw] h-auto  rounded-lg mt-10'>
            <label htmlFor="username" className='text-zinc-500'><span className='text-red-600'>*</span>  UserName: <br />
              <input className='border rounded px-2 mb-3 w-[84%] outline-0' type="text" required value={username} onChange={(e)=>setUsername(e.target.value)} />
            </label>
            <label htmlFor="username" className='text-zinc-500'><span className='text-red-600'>*</span>  Email: <br />
              <input className='border rounded px-2 mb-3 w-[84%] outline-0' type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label htmlFor="address" className='text-zinc-500'><span className='text-red-600'>*</span>  Password: <br />
              <input className='border rounded px-2 mb-3 w-[84%] outline-0' type="password" required value={pass} onChange={(e)=>setPass(e.target.value)}/>
            </label><br />
            <div className='flex gap-4'>
              <button className='w-[84%] py-1 px-6 text-white rounded bg-blue-600 '>Sign up</button>
            </div>
            <div className='flex gap-1 mt-10'>
              <h1 className='text-md text-zinc-500'>Already you have account ?</h1>
              <Link to="/login"><h1 className='text-blue-600'>Log in</h1></Link>
            </div>
          </form>  
        </div>
      </div>
    </div>
  )
}

export default SignUpPage