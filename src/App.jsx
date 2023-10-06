import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import  ThemeContexProvider  from './Contexts/ThemeContext';

function App() {

  return (
    <ThemeContexProvider>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
    </ThemeContexProvider>
  );
}

export default App;
