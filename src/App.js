
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/contact";
import AppBar from "./component/AppBar";
import ErrorBoundary from './component/ErrorBoundary';


function App() {
  return (
    <div>
<BrowserRouter>

<AppBar />
<Routes>
  <Route exact path="/" element={<Home />} />
 <Route path="/About" element={<About />} />
  <Route path="/Contact" element={<Contact />} />
  
</Routes>

</BrowserRouter>
    
    </div>
  );
}

export default App;
