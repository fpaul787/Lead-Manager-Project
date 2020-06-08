from django.urls import path
from django.views.generic import TemplateView
from . import views
# urlpatterns = [
#     path('', views.index)
# ]

# OR...
urlpatterns = [
    path('', TemplateView.as_view(template_name='frontend/index.html'))
]
