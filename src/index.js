import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { StoryProvider } from './contexts/StoryContext'
import './index.css';
import App from './components/App/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoryProvider>
        <App />
      </StoryProvider> 
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);
