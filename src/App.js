
import React from 'react';
import Hero from './components/Hero';
import Explore from './components/Explore';
import FeaturedJobs from './components/FeaturedJobs';
import Companies from './components/Companies';
import Categories from './components/Categories';

export default function App() {
  return (
    <>
      <Hero />
      <Explore />
      <FeaturedJobs />
      <Companies />
      <Categories />
    </>
  )
}
