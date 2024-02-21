import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={ <Home/>}/>
      </Routes>
      <h3>Maternity Care</h3>
     
    </div>
  );
}

export default App;
