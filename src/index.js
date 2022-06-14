import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { StyledEngineProvider } from '@mui/material';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import App from './components/App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <App />
      </StyledEngineProvider>
    </Provider>
  </React.StrictMode>,
);
