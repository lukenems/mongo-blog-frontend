import { useEffect, useState } from 'react';

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
          <p id={post._id}>{post.title}</p>
        ))}
      </div>
    </div>
  )
}

export default Home;