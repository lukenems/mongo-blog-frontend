import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

import './css/loginForm.css'

const LoginForm = () => {
  let [author, setAuthor] = useState('');
  const [pwd, setPwd] = useState('');
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    author === '' 
      ? author = 'dev'
      : author = ''

    await login(author, pwd)    
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