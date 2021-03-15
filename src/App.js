import React from 'react';
import Header from './components/Header'
import Section from './components/Section'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'

import './global.css'


//rotas
export default function App() {
  return (
    <>
      <Header />
      <Section />
      <Dashboard />
      <Nav />
    </>
  );
}