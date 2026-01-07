
import React from 'react';
import Hero from './components/Hero';
import Explore from './components/Explore';
import FeaturedJobs from './components/FeaturedJobs';
import Companies from './components/Companies';
import Categories from './components/Categories';
import Connections from './components/Connections';
import Recruiter from './components/Recruiter';
import Rating from './components/Rating';
import Clients from './components/Clients';
import Blog from './components/Blog';
import Advert from './components/Advert';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <Explore />
      <FeaturedJobs />
      <Companies />
      <Categories />
      <Connections />
      <Recruiter />
      <Rating />
      <Clients />
      <Blog />
      <Advert />
      <Subscribe />
      <Footer />
    </>
  )
}
