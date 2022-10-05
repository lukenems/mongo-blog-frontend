import {useState} from 'react';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dreamspellDate, setDreamspellDate] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const completePost = {title, content, dreamspellDate};
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(completePost),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json();

    !response.ok 
     ? setError(json.msg)
     : console.log('Post was added:', json)
         setTitle('')
         setContent('')
         setDreamspellDate('')
         setError(null)
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h2>What went down today?</h2>
      <label>Dreamspell Date:</label>
      <input 
        type='text'
        onChange={(e) => setDreamspellDate(e.target.value)}
        value={dreamspellDate}
      />
      <label>Title: </label>
      <input 
        type='text'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <label>Dump your mind out here:</label>
      <input 
        type='text'
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <button type='submit'>Submit</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default PostForm;