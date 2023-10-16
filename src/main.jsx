import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'normalize.css';
import { GlobalStyles } from './global-style.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyles />
    <App />
  </>,
)
