from django.db import models
# from mpesa.models import BaseModel

# Create your models here.


class Payment(models.Model):
    '''Defines attributes of the payments model'''
    STATUS = [
        ('O', 'Ok'),
        ('P', 'Pending'),
        ('C', 'Cancelled')
    ]
    phone_number = models.CharField(db_index=True, max_length=15)
    amount = models.DecimalField(max_digits=20, decimal_places=2)
    status = models.CharField(
        max_length=1,
        choices=STATUS,
        default='P',
    )
    # transaction_id = models.CharField(max_length=20, unique=True)
    business_short_code = models.CharField(
        max_length=20, blank=True, null=True)
    ref_number = models.CharField(max_length=50, blank=True, null=True)

    class Meta:
        '''Defines the ordering of the
         orders if retrieved'''
        ordering = ('pk',)

    def __str__(self):
        return self.status