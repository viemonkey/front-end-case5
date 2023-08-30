import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/home/HomePage';
import Post from './components/posts/Post';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path='' element={<HomePage />}>
          <Route path='/home' element={<Post />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
