import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './Home';
import WorksPage from './Works';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:id" element={<h1>Details work</h1>} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default App;
