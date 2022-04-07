import React from 'react';
import { Routes } from './routes';
// import { Routes } from './views/preLaunch/routes'
import PrismicFactory from '../src/Prismic-HOC';
function App(props) {
  return <Routes {...props} />;
}
export default PrismicFactory(App);
