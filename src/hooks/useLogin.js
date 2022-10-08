import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (author, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ author, password })
    })
    const json = await response.json()

    if(!response.ok) {
      setError(json.error);
      setIsLoading(false);
    } else {
      localStorage.setItem('user', JSON.stringify(json));
      setError(null);
      setIsLoading(false);
      dispatch({type: 'LOGIN', payload:json});
    }
  }

  return { login, isLoading, error };
}