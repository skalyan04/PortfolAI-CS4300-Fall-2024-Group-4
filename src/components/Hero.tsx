import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, ArrowRight, Play } from 'lucide-react'

const Hero: React.FC = () => {
  const [currentPrice, setCurrentPrice] = useState(185.42)
  const [priceChange, setPriceChange] = useState(3.27)
  const [changePercent, setChangePercent] = useState(1.80)

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      const variation = (Math.random() - 0.5) * 2 // -1 to +1
      setCurrentPrice(prev => Math.max(180, Math.min(190, prev + variation)))
      setPriceChange(prev => prev + (Math.random() - 0.5) * 0.5)
      setChangePercent(prev => prev + (Math.random() - 0.5) * 0.2)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">AI-Powered</span>
              <br />
              <span className="text-white">Investing</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Experience the future of finance with intelligent insights, real-time analytics, 
              and commission-free trading powered by advanced AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl font-semibold neon-glow hover:from-purple-600 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Start Trading</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-purple-500 text-purple-400 rounded-xl font-semibold hover:bg-purple-500/10 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>View Dashboard</span>
              </motion.button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-sm text-gray-400"
            >
              Advanced AI insights • Zero commission fees • Real-time data
            </motion.p>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Phone Frame */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-[600px] bg-dark-800 rounded-[3rem] p-6 neumorphism border-2 border-white/10 relative overflow-hidden"
              >
                {/* Phone Header */}
                <div className="flex justify-between items-center mb-6 text-white/80 text-sm">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-6 h-3 border border-white/40 rounded-sm">
                      <div className="w-full h-full bg-white/60 rounded-sm" />
                    </div>
                    <span>100%</span>
                  </div>
                </div>

                {/* Stock Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                  className="bg-dark-700 rounded-2xl p-6 neumorphism border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white">AAPL</h3>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-neon-green" />
                      <span className="text-xs text-neon-green font-medium">LIVE</span>
                    </div>
                  </div>

                  <motion.div
                    key={currentPrice}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold text-neon-blue neon-glow-blue mb-2"
                  >
                    ${currentPrice.toFixed(2)}
                  </motion.div>

                  <motion.div
                    key={priceChange}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-semibold text-neon-green neon-glow-green"
                  >
                    +{priceChange.toFixed(2)} (+{changePercent.toFixed(2)}%)
                  </motion.div>

                  {/* Mini Chart */}
                  <div className="mt-4 h-16 bg-dark-800 rounded-lg p-2">
                    <div className="h-full w-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 rounded flex items-end justify-between">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${Math.random() * 100}%` }}
                          transition={{ duration: 0.5, delay: i * 0.05 }}
                          className="w-1 bg-gradient-to-t from-neon-green to-neon-blue rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Additional Stats */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-dark-700 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Volume</div>
                    <div className="text-sm font-semibold text-white">2.4M</div>
                  </div>
                  <div className="bg-dark-700 rounded-xl p-3 text-center">
                    <div className="text-xs text-gray-400 mb-1">Market Cap</div>
                    <div className="text-sm font-semibold text-white">$2.8T</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
