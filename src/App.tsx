import { useState } from 'react';
import './App.css';
import Announcement from './components/Announcement';
import Navigation from './components/Navigation';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <Announcement /> */}
      <Navigation />
      <Slider/>
      <Products />
    </div>
  )
}

export default App;
