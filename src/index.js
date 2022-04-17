import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material';
import './index.css';
import App from './components/App';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
