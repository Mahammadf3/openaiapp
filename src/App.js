import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from "./component/Login"
import Header from './component/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
        <Route path="/Home" element={<Header/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
