import React from 'react'

const Dashboard = ({users}) => {
  
  console.log(users[0].username);
  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col'>
      <h1 className='text-[5vw]'>Hello,</h1>
      <h5 className='text-[1.2vw] leading-14'>i'm {users[0].username}</h5>
    </div>
  )
}
export default Dashboard