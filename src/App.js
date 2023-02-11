import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux' 
import Header from './components/header/Header';
import HomePage from './pages/home-page/home-page';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />}/>
        </Routes>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
