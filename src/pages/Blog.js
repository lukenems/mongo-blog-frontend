import { useEffect } from 'react';
import BlogPost from '../components/blogPost';
import { usePostsContext } from '../hooks/usePostsContext';
import './blog.css';
// import star from '../assets/icons/noun-loading-star.png';

const Blog = () => {
  const {posts, dispatch} = usePostsContext();
  // const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlogPosts = async () => {
      const response = await fetch('https://mongo-blog-369.herokuapp.com/api/posts');
      const json = await response.json();

      if(response.ok) dispatch({type: 'GET_POSTS', payload: json});
    }
    fetchBlogPosts();
    // setIsLoading(false);
  }, [dispatch])
  
  // const loadingStar = (
  //   <>
  //       <img src={star} alt='spinning loading star' id='loading-star'/>
  //       <p>Mongos Assembling</p>
  //     </>
  //   )

  return (
    <div className="posts-container">
      {posts && posts.map((post) => (
        <BlogPost key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Blog;