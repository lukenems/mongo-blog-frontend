import { useContext } from "react";
import { PostContext } from "../context/postsContext";

export const usePostsContext = () => {
  const context = useContext(PostContext);
  if(!context) {
     throw Error('usePostsContext must be used within usePostsProvider!');
  } return context;
}
