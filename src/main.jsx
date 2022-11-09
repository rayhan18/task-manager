import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { IssueProvider } from './assets/context/IssueContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IssueProvider>
       <App />
    </IssueProvider>
 
  </React.StrictMode>
)
