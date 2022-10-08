import LoginForm from "../components/loginForm";
import PostForm from "../components/postForm";
import { useAuthContext } from "../hooks/useAuthContext";

const Form = () => {
  const {user} = useAuthContext();

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