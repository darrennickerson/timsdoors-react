import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { BrowserRouter, Route } from 'react-router-dom';
const axios = require('axios');
const { REACT_APP_FL_API_KEY } = process.env;
function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${REACT_APP_FL_API_KEY}&user_id=155842074%40N08&extras=url_o&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setPhotos(response.data.photos.photo);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div>
      <BrowserRouter>
        <Header />

        <section className="pages">
          <Route exact path="/" component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route path="/work">
            <Work photos={photos} loading={loading} />
          </Route>

          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
