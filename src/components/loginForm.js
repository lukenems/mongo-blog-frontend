import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import './css/loginForm.css'

const LoginForm = () => {
  const {dispatch} = useAuthContext;
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
    console.log(author, pwd);

    //AUTH post here : will probly use different header?
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({author, pwd})
    })
    const json = response.json();
    !response.ok 
      ? setError(json.msg)
      : localStorage.setItem('user', JSON.stringify(json));
          setAuthor('')
          setPwd('')
          setError(null)
          setIsLoading(false)
          dispatch({type: 'LOGIN', payload:json});

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