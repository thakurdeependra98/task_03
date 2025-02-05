import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const SignUpPage = ({ setIsAuthenticated, setUsers }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlerSubmit = (data) => {
    setIsAuthenticated(true);
    setUsers((prevUsers) => [...prevUsers, { username: data.username, email: data.email, pass: data.password }]);
    navigate('/dashboard');
  };

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col gap-10'>
      <div className='w-[23vw] border py-8 px-5 rounded-lg shadow-lg shadow-zinc-900/50 bg-white'>
        <div>
          <h1 className='text-3xl font-medium'>Sign Up</h1>
          <h1 className='text-lg font-normal mt-6 text-zinc-500 leading-5'>Welcome! Please create your account</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit(handlerSubmit)} className='flex flex-col w-[24vw] h-auto rounded-lg mt-10'>
            <label className='text-zinc-500 mb-3'>
              <span className='text-red-600'>*</span> UserName:
              <br />
              <input
                className='border rounded px-2 w-[84%] outline-0'
                type='text'
                {...register('username', { required: 'Username is required' })}
              />
              {errors.username && <p className='text-red-500'>{errors.username.message}</p>}
            </label>

            <label className='text-zinc-500 mb-3'>
              <span className='text-red-600'>*</span> Email:
              <br />
              <input
                className='border rounded px-2 w-[84%] outline-0'
                type='email'
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
            </label>

            <label className='text-zinc-500 mb-3'>
              <span className='text-red-600'>*</span> Password:
              <br />
              <input
                className='border rounded px-2 w-[84%] outline-0'
                type='password'
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
            </label>
            <br />

            <div className='flex gap-4'>
              <button className='w-[84%] py-1 px-6 text-white rounded bg-blue-600'>Sign up</button>
            </div>

            <div className='flex gap-1 mt-10'>
              <h1 className='text-md text-zinc-500'>Already have an account?</h1>
              <Link to='/login'>
                <h1 className='text-blue-600'>Log in</h1>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
