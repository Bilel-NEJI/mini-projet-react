import { Route, Routes, Navigate } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Shopping from './pages/Shopping';
function App() {
  return (
    <div>
       <div style={{}} id="mainApp">
      <Header />
      </div>
      <main>
        <Routes>
          {/* <Route path='/' element={<Navigate replace to='/products' />} /> */}
          <Route path='/*' element={<Products />} />
          <Route path='/Shopping' element={<Shopping />} />
          
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
