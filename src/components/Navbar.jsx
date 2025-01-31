import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({isAuthenticated, handlerLogout}) => {

  return (
		<>
			<div className='w-screen mx-auto  px-30 py-8 flex items-center justify-between absolute'>
				<div>
					<h1 className='text-[2.2vw] font-light'>CoderBite</h1>
				</div>
				{!isAuthenticated ? (<div className='flex gap-5'>
					<Link to="/login"><button className='border rounded px-4 py-1 text-lg bg-blue-600 text-white'>Log in</button></Link>
					<Link to="/signup"><button className='border rounded px-4 py-1 text-lg bg-blue-600 text-white'>Sign up</button></Link>
				</div>) : (<div><Link to="/"><button onClick={handlerLogout} className='border rounded px-4 py-1 text-lg bg-blue-600 text-white'>Logout</button></Link></div>)}
			</div>
		</>
  )
}

export default Navbar