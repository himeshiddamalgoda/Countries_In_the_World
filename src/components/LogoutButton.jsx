import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    const {  isAuthenticated,logout } = useAuth0();
  return (
    isAuthenticated && (
    <button onClick={() => logout()} className='rounded-md bg-slate-100 text-sm p-2'>
        Log Out
      </button>)
  )
}

export default LogoutButton
