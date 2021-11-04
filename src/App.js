import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <section className="pages">
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/work" component={Work} />

          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
