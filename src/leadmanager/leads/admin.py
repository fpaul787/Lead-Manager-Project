from django.contrib import admin

# Register your models here.
from .models import Lead

admin.site.register(Lead)

admin.site.site_header = "Lead Manager Admin"
admin.site.site_title = "Lead Manager Admin Area"
admin.site.index_title = "Welcome to the Lead Manager admin area"
