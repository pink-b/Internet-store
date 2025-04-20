import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import SiteNavbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <SiteNavbar />
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
