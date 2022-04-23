import '../App.css';
import Header from './Header';
import Loading from './Loading';
import animation from '../assets/gifs/okabeandkurisu.gif';

const App = () => (
  <div className="flex flex-col items-center min-h-screen justify-center">
    <Header />
    <Loading animation={animation} />
  </div>
);
export default App;
