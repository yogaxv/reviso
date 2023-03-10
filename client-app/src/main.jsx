import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import './index.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider} from '@mui/material/styles';


import CssBaseline from '@mui/material/CssBaseline';

import theme from './assets/theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <CssBaseline />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
)
