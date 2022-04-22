import '../App.css';
import MenuIcon from '@mui/icons-material/Menu';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { IconButton } from '@mui/material';

const App = () => (
  <div className="App">
    <header className="flex p-1 px-4 fixed container justify-between items-center">
      <IconButton>
        <MenuIcon fontSize="large" className="text-primary-1000 text-5xl" />
      </IconButton>
      <IconButton className="border-4 border-primary-1000 border-solid h-fit p-0">
        <VolumeMuteIcon fontSize="large" className="text-primary-1000 text-4xl" />
      </IconButton>
    </header>
  </div>
);
export default App;
