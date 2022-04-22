import '../App.css';
import Header from './Header';
import LoadingHome from './LoadingHome';

const App = () => (
  <div className="flex flex-col items-center min-h-screen justify-center">
    <Header />
    <LoadingHome />
  </div>
);
export default App;
