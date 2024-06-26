import './assets/styles/reset.scss'
import './assets/styles/common.scss'
import './assets/styles/mediaquery.scss'
import Header from './layouts/Header';
import Home from './layouts/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './layouts/Footer';
import Login from './layouts/Login';
import Product from './layouts/Product.js'
import PrdPayment from './layouts/PrdPayment.js';
import OrderList from './layouts/OrderList.js';
/* eslint-disable jsx-a11y/anchor-is-valid  */
function App() {

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes >
          <Route path='/login' element={<Login />} />
          <Route path='/product' element={<Product />} />
          <Route path='/' element={<Home />}/>
          <Route path='/payment' element={<PrdPayment />}/>
          <Route path='/orderlist' element={<OrderList />}/>
          {/* <Product /> */}
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
