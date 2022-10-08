import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import './css/loginForm.css'

const LoginForm = () => {
  const { dispatch } = useAuthContext();
  let [author, setAuthor] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    author === '' 
      ? author = 'dev'
      : author = ''

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({author, password:pwd})
    })
    const json = await response.json();

    if(!response.ok) {
      setError(json.error);
      setAuthor('');
      setPwd('');
      setIsLoading(false);
    } else {
      localStorage.setItem('user', JSON.stringify(json));
      setAuthor('');
      setPwd('');
      setError(null);
      setIsLoading(false);
      dispatch({type: 'LOGIN', payload:json});
    }
  }

  return (
      <form onSubmit={handleSubmit} className="login">
        <input 
          type="text" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button disabled={isLoading}>Login</button>
        {error && <div className='error'>{error}</div>}
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </form>
  )
}

export default LoginForm