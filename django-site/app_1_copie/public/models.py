from django.db import models
from django.contrib.auth.models import User

# Profile model to extend user info
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    weekend_registered = models.BooleanField(default=False)
    # Additional fields for weekend registration
    phone_number = models.CharField(max_length=15, blank=True)
    registration_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.user.username

# Weekend Event model to display on the homepage
class IntegrationWeekend(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return self.title

# Services offered during the weekend
class Service(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    available_slots = models.IntegerField()

    def __str__(self):
        return self.name

# Model to store user service selection
class ServiceChoice(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    service = models.ForeignKey(Service, on_delete=models.CASCADE)
    chosen_date = models.DateField()

    def __str__(self):
        return f'{self.user.username} - {self.service.name}'
