from rest_framework import viewsets, permissions
from .models import Lead
from .serializers import LeadSerializer


# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permissions_classes = [
        permissions.AllowAny
        # permissions.IsAuthenticatedOrReadOnly
    ]
    serializer_class = LeadSerializer
