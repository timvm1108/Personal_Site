from django.shortcuts import render
from .models import Contact, Skill
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ContactSerializer, SkillSerializer

# Create your views here.

class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = [permissions.AllowAny]
    lookup_field = 'id'

class SkillViewSet(viewsets.ModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    lookup_field = 'id'
