const BlogPost = ({ post }) => {
  return (
    <div className="post-details">
      <h3 className="title">{post.title}</h3>
      <p className="content">{post.content}</p>
      <h3 className="date">{post.dreamspellDate}</h3>
    </div>
  )

}

export default BlogPost;