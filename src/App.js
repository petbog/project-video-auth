import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import PegisterPage from './Pages/Register/PegisterPage';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<PegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
