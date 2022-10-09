import {useState} from 'react';
import { usePostsContext } from '../hooks/usePostsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import './css/postForm.css'

const PostForm = () => {
  const {dispatch} = usePostsContext();
  const {user} = useAuthContext();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dreamspellDate, setDreamspellDate] = useState('');
  const [error, setError] = useState(null);

  const handleOnClick = (e) => {
    e.currentTarget.classList.add('button-swirl');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) { 
      setError('You gotta be logged in')
      return
    }

    const completePost = {title, content, dreamspellDate};
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(completePost),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json();
    if (!response.ok) {
      setError(json.msg);
    }
    if (response.ok) {
      setTitle('');
      setContent('');
      setDreamspellDate('');
      setError(null);
      dispatch({type: 'CREATE_POST', payload:json});
    }
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Dump the day</h1>
        <input 
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
        />
          <textarea
            type='text'
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder='What went down today?'
            rows='16'
          /> 
        <input 
          type='text'
          onChange={(e) => setDreamspellDate(e.target.value)}
          value={dreamspellDate}
          placeholder='Dreamspell Date'
        />
      <button onClick={handleOnClick} type='submit'>Peace</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default PostForm;