from rest_framework import viewsets, permissions
from .models import Lead
from .serializers import LeadSerializer


# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
    # Got rid of in Video 5
    # queryset = Lead.objects.all()

    permissions_classes = [

        permissions.IsAuthenticated
    ]
    serializer_class = LeadSerializer

    # return lead of authenicated user
    def get_queryset(self):
        return self.request.user.leads.all()

    # Save lead owner when we create lead
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
