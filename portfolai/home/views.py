from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
import random
from datetime import datetime, timedelta

# Create your views here.

def index(request):
    """Serve the React frontend"""
    return render(request, 'home/index.html')

@csrf_exempt
@require_http_methods(["GET"])
def api_market_data(request):
    """API endpoint for market data"""
    # Simulate real market data
    market_data = {
        'sp500': {
            'price': round(4892.15 + random.uniform(-50, 50), 2),
            'change': round(random.uniform(-2, 2), 2),
            'changePercent': round(random.uniform(-1, 1), 2)
        },
        'nasdaq': {
            'price': round(15847.32 + random.uniform(-100, 100), 2),
            'change': round(random.uniform(-3, 3), 2),
            'changePercent': round(random.uniform(-2, 2), 2)
        },
        'dow': {
            'price': round(38245.67 + random.uniform(-200, 200), 2),
            'change': round(random.uniform(-2, 2), 2),
            'changePercent': round(random.uniform(-1, 1), 2)
        },
        'btc': {
            'price': round(43250.89 + random.uniform(-1000, 1000), 2),
            'change': round(random.uniform(-5, 5), 2),
            'changePercent': round(random.uniform(-3, 3), 2)
        }
    }
    
    return JsonResponse(market_data)

@csrf_exempt
@require_http_methods(["GET"])
def api_chart_data(request):
    """API endpoint for chart data"""
    # Generate 24 hours of mock data
    chart_data = []
    base_time = datetime.now() - timedelta(hours=23)
    
    for i in range(24):
        time = base_time + timedelta(hours=i)
        chart_data.append({
            'time': time.strftime('%H:%M'),
            'sp500': round(4800 + random.uniform(-100, 200) + i * 2, 2),
            'nasdaq': round(15500 + random.uniform(-200, 400) + i * 5, 2),
            'dow': round(38000 + random.uniform(-300, 500) + i * 3, 2)
        })
    
    return JsonResponse({'data': chart_data})

@csrf_exempt
@require_http_methods(["GET"])
def api_portfolio_stats(request):
    """API endpoint for portfolio statistics"""
    stats = {
        'totalVolume': f"${random.uniform(2.0, 3.0):.1f}T",
        'gainers': random.randint(1200, 1300),
        'activeTrades': f"{random.randint(40, 50)}K",
        'marketCap': f"${random.uniform(100, 120):.1f}T"
    }
    
    return JsonResponse(stats)