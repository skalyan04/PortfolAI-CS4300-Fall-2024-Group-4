# urls.py (- SK)
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/market-data/', views.api_market_data, name='market_data'),
    path('api/chart-data/', views.api_chart_data, name='chart_data'),
    path('api/portfolio-stats/', views.api_portfolio_stats, name='portfolio_stats'),
]