import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Brain, 
  Smartphone, 
  Shield, 
  Zap, 
  BarChart3,
  Target,
  Globe
} from 'lucide-react'

const Features: React.FC = () => {
  const features = [
    {
      icon: TrendingUp,
      title: 'Commission-Free Trading',
      description: 'Trade stocks, ETFs, and options with zero commission fees. Keep more of your profits.',
      color: 'from-green-400 to-green-600',
      glow: 'neon-glow-green'
    },
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get personalized investment recommendations powered by advanced machine learning algorithms.',
      color: 'from-purple-400 to-purple-600',
      glow: 'neon-glow'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Trade on the go with our intuitive mobile app designed for modern investors.',
      color: 'from-blue-400 to-blue-600',
      glow: 'neon-glow-blue'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Your investments are protected with bank-level security and 256-bit encryption.',
      color: 'from-orange-400 to-orange-600',
      glow: 'neon-glow'
    },
    {
      icon: Zap,
      title: 'Real-Time Data',
      description: 'Access live market data, instant notifications, and lightning-fast trade execution.',
      color: 'from-yellow-400 to-yellow-600',
      glow: 'neon-glow'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive portfolio analysis with detailed charts and performance metrics.',
      color: 'from-pink-400 to-pink-600',
      glow: 'neon-glow'
    },
    {
      icon: Target,
      title: 'Goal-Based Investing',
      description: 'Set financial goals and let our AI create personalized investment strategies.',
      color: 'from-indigo-400 to-indigo-600',
      glow: 'neon-glow'
    },
    {
      icon: Globe,
      title: 'Global Markets',
      description: 'Access international markets and diversify your portfolio across the globe.',
      color: 'from-cyan-400 to-cyan-600',
      glow: 'neon-glow-blue'
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-800 to-dark-900">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/5 via-transparent to-transparent" />
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
            <span className="gradient-text">Why Choose</span> PortfolAI?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience the next generation of investing with cutting-edge AI technology, 
            zero fees, and professional-grade tools designed for modern investors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-6 h-full neumorphism border border-white/10 group-hover:border-purple-500/50 transition-all duration-300">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 ${feature.glow} group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '1M+', label: 'Active Users' },
            { number: '$50B+', label: 'Assets Managed' },
            { number: '99.9%', label: 'Uptime' },
            { number: '24/7', label: 'AI Monitoring' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
