import { Routes, Route } from 'react-router-dom';
import './App.css';
import Modal from './Component/popup/Modal';
import LoginPage from './Pages/Login/LoginPage';
import PegisterPage from './Pages/Register/PegisterPage';
import SearchPage from './Pages/search/SearchPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SearchPage />} />
      </Routes>
      <div className="container">
        <Routes>
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<PegisterPage />} />
          <Route path='/Modal' element={<Modal />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
