import { useEffect, useState } from 'react';
import BlogPost from '../components/blogPost';

const Home = () => {

  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('/api/posts');
      const json = await response.json()

      if(response.ok) {
        setPosts(json)
      }
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
    </div>
  )
}

export default Home;