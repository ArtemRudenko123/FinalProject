import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Main from './components/content/main/main';
import Projects from './components/content/projects/projects';
import Blog from './components/content/Blog/blog';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
        <Header/>   
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>                                                    
    </div>
    </BrowserRouter>
  );
}

export default App;
