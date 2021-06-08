import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Hello from './container/Hello'
import Home from './container/Home'
import Counter from './container/Couter'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/hello" element={<Hello />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
