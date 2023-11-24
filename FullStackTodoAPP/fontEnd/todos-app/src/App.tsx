import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import FooterComponent from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home';
import Todos from './components/Todos';
import DescriptionAlerts from './components/Alert';
import SimpleBadge from './components/Badge';

function App() {


  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/todos' element={<Todos />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
}

export default App;