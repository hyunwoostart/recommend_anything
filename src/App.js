import './assets/styles/reset.scss'
import './assets/styles/common.scss'
import './assets/styles/mediaquery.scss'
import Header from './layouts/Header';
import Home from './layouts/Home';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
