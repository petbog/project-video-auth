import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage';
import LoginPage from './Pages/Login/LoginPage';
import PegisterPage from './Pages/Register/PegisterPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<PegisterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
