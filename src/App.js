// import logo from './logo.svg';
import './App.css';
import Display from './Component/Display';
import Home from './Component/Home';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/display" element={<Display/>}></Route>
  </Routes>
</Router>

    </div>
  );
}

export default App;
