import { Route, Routes } from 'react-router-dom';
import './App.css';
import Announcement from './components/Announcement';
import Navigation from './components/Navigation';
import SubNavigation from './components/SubNavigation';
import AuthProvider from './context/AuthContext';
import CartProvider from './context/CartContext';
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {


  return (
    <div className="App">
      {/* <Announcement /> */}

      <AuthProvider>
        <CartProvider>
          <Navigation />
          <SubNavigation />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/products/:id' element={<SingleProductPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/shopping-cart' element={<CartPage />} />
            <Route path='/categories/:id' element={<CategoryPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </div>
  )
}

export default App;
