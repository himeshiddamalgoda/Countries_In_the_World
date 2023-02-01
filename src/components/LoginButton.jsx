import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    // console.log(isAuthenticated,user)
  return (
      !isAuthenticated && (
      <button onClick={() => loginWithRedirect()} className='rounded-md bg-slate-100 text-sm p-2'>
        Log In
      </button>
    )
  )
}

export default LoginButton
