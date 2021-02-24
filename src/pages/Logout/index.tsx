import React from 'react';
import useAuth from 'hooks/useAuth';

export function Logout() {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
