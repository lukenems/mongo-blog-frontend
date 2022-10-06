import { useState } from "react";
import './css/loginForm.css'

const LoginForm = () => {
  let [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    user === '' 
      ? user = 'dev'
      : user = ''
    console.log(user, pwd);

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
          value={user}
          onChange={(e) => setUser(e.target.value)}
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