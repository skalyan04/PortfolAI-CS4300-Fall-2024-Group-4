# PortfolAI - AI-Powered Investing Platform

A modern, reactive web application built with Django REST API backend and React + Tailwind CSS frontend, featuring real-time market data, AI-powered insights, and a futuristic dark theme.

## 🚀 Features

- **AI-Powered Insights**: Machine learning algorithms for investment recommendations
- **Real-Time Market Data**: Live updates for stocks, ETFs, and crypto
- **Commission-Free Trading**: Zero fees for all trades
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Charts**: Real-time data visualization with Recharts
- **Futuristic UI**: Dark theme with neon effects and animations
- **REST API**: Django REST Framework for backend services

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Recharts** for data visualization
- **Lucide React** for icons

### Backend
- **Django 5.2.7** with Python
- **Django REST Framework** for API
- **SQLite** database (development)
- **CORS** support for frontend integration

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- pip

### Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run Django migrations
cd portfolai
python manage.py migrate

# Create superuser (optional)
python manage.py createsuperuser

# Start Django server
python manage.py runserver
```

### Frontend Setup
```bash
# Install Node.js dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Development

### Running the Full Stack
1. Start Django backend:
   ```bash
   cd portfolai
   python manage.py runserver
   ```

2. Start React frontend:
   ```bash
   npm run dev
   ```

3. Access the application:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000/api/

### API Endpoints
- `GET /api/market-data/` - Real-time market data
- `GET /api/chart-data/` - Historical chart data
- `GET /api/portfolio-stats/` - Portfolio statistics

## 🎨 Design System

### Color Palette
- **Primary**: Purple gradient (#6a5acd → #8a2be2)
- **Accent**: Blue (#4a90e2), Green (#00ff88), Red (#ff4757)
- **Background**: Dark gradient (#0f0f10 → #1a1a1a)
- **Text**: White (#ffffff), Gray (#999999)

### Components
- Glass-morphism effects
- Neumorphism design elements
- Neon glow effects
- Smooth animations with Framer Motion
- Responsive grid layouts

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```
DJANGO_SECRET_KEY=your-secret-key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1
```

### Vite Configuration
The Vite config includes:
- React plugin
- TypeScript support
- Tailwind CSS integration
- Proxy for Django API

## 🚀 Deployment

### Building for Production
```bash
# Build React frontend
npm run build

# Collect Django static files
cd portfolai
python manage.py collectstatic

# Run Django server
python manage.py runserver
```

### Docker Support
```dockerfile
# Add Dockerfile for containerized deployment
FROM node:18-alpine as frontend
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM python:3.9-alpine
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
COPY --from=frontend /app/dist ./static/frontend
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern fintech applications
- Icons by Lucide React
- Animations by Framer Motion
- Charts by Recharts
- Styling by Tailwind CSS