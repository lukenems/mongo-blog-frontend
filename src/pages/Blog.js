import { useEffect } from 'react';
import BlogPost from '../components/blogPost';
import { usePostsContext } from '../hooks/usePostsContext';
import './blog.css';
import  InitMongos from '../components/css/fallingMongoBkgd';

const Blog = () => {
  const {posts, dispatch} = usePostsContext();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('/api/posts');
      const json = await response.json();

      if(response.ok) dispatch({type: 'GET_POSTS', payload: json});
    }
    fetchBlogPosts()
  }, [])

  return (
    <div className="posts-container">
      <InitMongos />
      {posts && posts.map((post) => (
        <BlogPost key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Blog;