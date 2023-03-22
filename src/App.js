import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import PegisterPage from './Pages/PegisterPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/'  element ={<HomePage/>}/>
        <Route path ='/Login'  element ={<LoginPage/>}/>
        <Route path ='/Register'  element ={<PegisterPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
