import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MarketOverview from './components/MarketOverview'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <Navbar />
      <Hero />
      <Features />
      <MarketOverview />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
