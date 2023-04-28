
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <Router>    
        <Topbar />
        <div className="container" >
        <Sidebar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          
          <Route path="/users" element={<UserList /> } />
          
        </Routes>
        </div>   
    </Router>
  );
}

export default App;

