import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux' 
import Header from './components/header/Header';
import HomePage from './pages/home-page/home-page';
import GamePage from './pages/game-page/Game-Page';
import OrderPage from './pages/order-page/Order-Page';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/app/:title' element={<GamePage />} />
          <Route path='/order' element={<OrderPage />} />
        </Routes>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
