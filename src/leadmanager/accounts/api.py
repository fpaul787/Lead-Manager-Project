from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

# Register API


class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    # all the that we send when we register is coming here
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()

        # Send Serialized User as Response
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            # create token specific to user
            "token": AuthToken.objects.create(user)[1]
        })

# Login API


# Get User API
