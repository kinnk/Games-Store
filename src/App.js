import {BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
