import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login/Login';
import Home from './Home/Home';
import Footer from './Common/Footer';
import ClientRegister from './Client/ClientRegister';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/client-register' element={<ClientRegister />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
