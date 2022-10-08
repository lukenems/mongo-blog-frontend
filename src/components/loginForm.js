import { useState } from "react";
import './css/loginForm.css'

const LoginForm = () => {
  let [author, setAuthor] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    author === '' 
      ? author = 'dev'
      : author = ''
    console.log(author, pwd);

    //AUTH post here : will probly use different header?
    //const signIn = {user, pwd};
    // const response = await fetch('/api/auth', {
    //   method: 'POST',
    //   body: JSON.stringify(signIn),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })

  }

  return (
      <form onSubmit={handleSubmit} className="login">
        <input 
          type="text" 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button>Login</button>
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
      </form>
  )
}

export default LoginForm