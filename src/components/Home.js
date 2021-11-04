import React from 'react';
import Garaga from './home/Garaga';
import Service from './home/Service';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <div className="heroText">
            <h1>Handling PEI's Overhead Door Needs</h1>
            <em>Since 2018</em>
          </div>
        </div>
      </section>
      <Garaga />
      <Service />
    </div>
  );
};

export default Home;
