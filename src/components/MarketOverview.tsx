import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const MarketOverview: React.FC = () => {
  const [marketData, setMarketData] = useState([
    { name: 'S&P 500', price: 4892.15, change: 1.24, changePercent: 1.24, trend: 'up' },
    { name: 'NASDAQ', price: 15847.32, change: 2.18, changePercent: 2.18, trend: 'up' },
    { name: 'DOW', price: 38245.67, change: 0.87, changePercent: 0.87, trend: 'up' },
    { name: 'BTC', price: 43250.89, change: -2.15, changePercent: -2.15, trend: 'down' }
  ])

  const [chartData, setChartData] = useState([])

  // Generate mock chart data
  useEffect(() => {
    const generateChartData = () => {
      const data = []
      const now = new Date()
      for (let i = 23; i >= 0; i--) {
        const time = new Date(now.getTime() - i * 60 * 60 * 1000)
        data.push({
          time: time.getHours() + ':00',
          sp500: 4800 + Math.random() * 200,
          nasdaq: 15500 + Math.random() * 500,
          dow: 38000 + Math.random() * 500
        })
      }
      setChartData(data)
    }

    generateChartData()
    const interval = setInterval(generateChartData, 5000)
    return () => clearInterval(interval)
  }, [])

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(item => {
        const variation = (Math.random() - 0.5) * 0.5
        const newChange = item.change + variation
        const newPrice = item.price + variation * 10
        return {
          ...item,
          price: Math.max(0, newPrice),
          change: newChange,
          changePercent: (newChange / item.price) * 100,
          trend: newChange >= 0 ? 'up' : 'down'
        }
      }))
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="w-4 h-4 text-neon-green" />
    ) : (
      <TrendingDown className="w-4 h-4 text-neon-red" />
    )
  }

  const getTrendColor = (trend: string) => {
    return trend === 'up' ? 'text-neon-green neon-glow-green' : 'text-neon-red neon-glow-red'
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Live Market</span> Overview
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time market data and analytics powered by advanced AI algorithms
          </p>
        </motion.div>

        {/* Market Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {marketData.map((market, index) => (
            <motion.div
              key={market.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="glass-effect rounded-2xl p-6 neumorphism border border-white/10 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">{market.name}</h3>
                <div className="flex items-center space-x-2">
                  {getTrendIcon(market.trend)}
                  <span className="text-xs text-gray-400 font-medium">LIVE</span>
                </div>
              </div>

              <motion.div
                key={market.price}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-2xl font-bold text-neon-blue neon-glow-blue mb-2"
              >
                {market.name === 'BTC' ? '₿' : '$'}{market.price.toLocaleString()}
              </motion.div>

              <motion.div
                key={market.change}
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`text-lg font-semibold ${getTrendColor(market.trend)}`}
              >
                {market.change >= 0 ? '+' : ''}{market.change.toFixed(2)} ({market.changePercent >= 0 ? '+' : ''}{market.changePercent.toFixed(2)}%)
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Live Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-6 neumorphism border border-white/10"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Market Performance (24h)</h3>
            <div className="flex items-center space-x-2">
              <Activity className="w-5 h-5 text-neon-green" />
              <span className="text-sm text-neon-green font-medium">LIVE</span>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="sp500" 
                  stroke="#6a5acd" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="nasdaq" 
                  stroke="#4a90e2" 
                  strokeWidth={2}
                  dot={false}
                />
                <Line 
                  type="monotone" 
                  dataKey="dow" 
                  stroke="#00ff88" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Chart Legend */}
          <div className="flex justify-center space-x-6 mt-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-400">S&P 500</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-400">NASDAQ</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-400">DOW</span>
            </div>
          </div>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: DollarSign, label: 'Total Volume', value: '$2.4T', change: '+12.5%' },
            { icon: TrendingUp, label: 'Gainers', value: '1,247', change: '+8.2%' },
            { icon: Activity, label: 'Active Trades', value: '45.2K', change: '+15.3%' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-4 text-center neumorphism border border-white/10"
            >
              <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 mb-1">{stat.label}</div>
              <div className="text-xs text-neon-green">{stat.change}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MarketOverview
