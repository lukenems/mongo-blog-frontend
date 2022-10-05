import {useState} from 'react';
import { usePostsContext } from '../hooks/usePostsContext';
import './css/postForm.css'

const PostForm = () => {
  const {dispatch} = usePostsContext;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [dreamspellDate, setDreamspellDate] = useState('');
  const [error, setError] = useState(null);

  const handleOnClick = (e) => {
    e.currentTarget.classList.add('button-swirl')
  }


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
     : setTitle('');
        setContent('');
        setDreamspellDate('');
        setError(null);
        dispatch({type: 'CREATE_POST', payload:json});
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h1>Dump the day</h1>

      {/* <label class="custom-field">
            <input type="email"/>
            <span class="placeholder">Enter Email</span>
          </label> 
      */}
        <input 
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title"
        />
        <input 
          type='text'
          onChange={(e) => setContent(e.target.value)}
          value={content}
          placeholder='What went down today?'
        />
        <textarea
          type='text'
          onChange={(e) => setDreamspellDate(e.target.value)}
          value={dreamspellDate}
          placeholder='Dreamspell Date'
          rows='16'
        /> 
      <button onClick={handleOnClick} type='submit'>Peace</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default PostForm;