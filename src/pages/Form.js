import LoginForm from "../components/loginForm";
import PostForm from "../components/postForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Form = () => {
  const {user} = useAuthContext();
  //check if logged in, then show new post form
  // else, show login form
  console.log(user)
  return (
    <div className="form-container">
      {
        user
         ? <PostForm />
         : <LoginForm />
      }
    </div>
  )
}

export default Form;