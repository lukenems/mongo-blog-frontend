import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Navbar from './components/navbar';
import Form from './pages/Form';
import InitMongos from './components/css/fallingMongoBkgd';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <InitMongos />
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
