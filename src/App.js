
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import DataList from './pages/userList/DataList';
import UserList from './pages/userList/UserList';
import User from './pages/user/User'

function App() {
  return (
    <Router>    
        <Topbar />
        <div className="container" >
        <Sidebar />
        <Routes>
          <Route exact path="/" 
          element={ <Home /> } />
          
          <Route path="/users" 
          element={<UserList /> } />

          <Route path="/user/:userId" 
          element={<User /> } />
                  
        </Routes>
        </div>   
    </Router>
  );
}

export default App;


