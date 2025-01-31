import React from 'react'

const Dashboard = ({users}) => {
  
  console.log(users[0].username);
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <h1 className='text-[5vw]'>Hello, <br /> i'm {users[0].username}</h1>
    </div>
  )
}

export default Dashboard