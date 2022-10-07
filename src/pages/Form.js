import LoginForm from "../components/loginForm";
import PostForm from "../components/postForm";

const Form = () => {
  const isLoggedIn = true;
  //check if logged in, then show new post form
  // else, show login form

  return (
    <div className="form-container">
      {
        isLoggedIn
         ? <PostForm />
         : <LoginForm />
      }
    </div>
  )
}

export default Form;