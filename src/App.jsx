import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import  ThemeContexProvider  from './Contexts/ThemeContext';
import Homepage from './pages/Homepage/Homepage';

function App() {

  const apiKey = import.meta.env.VITE_APP_API_KEY
  const baseUrl = import.meta.env.VITE_BASE_URL

  return (
    <ThemeContexProvider>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path ="/" element={<Homepage apiKey={apiKey} baseUrl={baseUrl} />}/>
      </Routes>
    </BrowserRouter>
    </ThemeContexProvider>
  );
}

export default App;
