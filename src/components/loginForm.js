import { useState } from "react";

const LoginForm = () => {
  const [user, setUser] = useState('dev');
  const [pwd, setPwd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={''}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="text"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
        />
        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm