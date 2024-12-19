import './index.css'
import { App } from './app.jsx'
import { BrowserRouter } from 'react-router';
import { createRoot } from "react-dom/client"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
);