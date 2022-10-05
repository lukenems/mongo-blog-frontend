import { useEffect } from 'react';
import BlogPost from '../components/blogPost';
import PostForm from '../components/postForm';
import { usePostsContext } from '../hooks/usePostsContext';

const Home = () => {
  const {posts, dispatch} = usePostsContext();

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('/api/posts');
      const json = await response.json()

      if(response.ok) dispatch({type: 'GET_POSTS', payload: json})
    }
    fetchBlogPosts()
  }, [])

  return (
    <div className="home">
      <div className="posts">
        {posts && posts.map((post) => (
          <BlogPost key={post._id} post={post} />
        ))}
      </div>
      <PostForm />
    </div>
  )
}

export default Home;