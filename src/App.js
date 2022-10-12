import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Navbar from './components/navbar';
import Form from './pages/Form';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Blog />}
            />
            <Route
              path='/write'
              element={<Form />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
