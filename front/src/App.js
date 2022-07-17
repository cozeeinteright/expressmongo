import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './page/Home'
import About from './page/About'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Hello
      </header>
      <BrowserRouter>
      <  Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
