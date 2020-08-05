import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom'
import { StoryProvider } from './contexts/StoryContext'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoryProvider>
        <App />
      </StoryProvider> 
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);
