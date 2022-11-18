import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Announcement from './components/Announcement';
import Navigation from './components/Navigation';
import { IProduct } from './components/ProductCard';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {
  const [products, setProducts] = useState<IProduct[]>([])


  useEffect(() => {
    const productsUrl = 'https://api.escuelajs.co/api/v1/products';
    axios.get(productsUrl).then((response) => {
      console.log('response: ', response);
      setProducts(response.data)
    });
  }, []);

  return (
    <div className="App">
      {/* <Announcement /> */}
      <Navigation />
      <Slider/>
      <Products products={products} />
    </div>
  )
}

export default App;
