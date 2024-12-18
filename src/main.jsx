import './index.css'
import { App } from './app.jsx'
import { BrowserRouter } from 'react-router';
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
);