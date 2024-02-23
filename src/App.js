import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Footer from './Common/Footer';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={ <Home/>}/>
      </Routes>  
      <Footer/>
    </div>
  );
}

export default App;
