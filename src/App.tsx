import { Route, Routes } from 'react-router-dom';
import './App.css';
import Announcement from './components/Announcement';
import Navigation from './components/Navigation';
import SubNavigation from './components/SubNavigation';
import AuthProvider from './context/AuthContext';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {


  return (
    <div className="App">
      {/* <Announcement /> */}

      <AuthProvider>
        <Navigation />
        <SubNavigation />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/products/:id' element={<SingleProductPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/shopping-cart' element={<CartPage />} />
        </Routes>
      </AuthProvider>

    </div>
  )
}

export default App;
