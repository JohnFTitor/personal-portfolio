import '../App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from './Home';
import WorkPage from './Work';
import DetailsPage from './DetailsPage';
import AboutPage from './AboutPage';

const App = () => {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }

  return (
    <BrowserRouter>
      <div className={`app ${localStorage.theme}`}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<WorkPage />} />
          <Route path="/projects/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
