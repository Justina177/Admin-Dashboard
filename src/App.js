
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Topbar from './Components/Topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container" >
      <Sidebar />
      <div className="other">other pages</div>
      </div> 
    </div>
  );
}

export default App;
