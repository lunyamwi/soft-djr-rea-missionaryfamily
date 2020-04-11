import requests
from celery.utils.log import get_task_logger
from django.conf import settings
from home import celery_app
from django.conf import settings
import json
from requests.auth import HTTPBasicAuth
from datetime import datetime
import base64

class MpesaC2bCredential:
    consumer_key = settings.MPESA_CONSUMER_KEY
    consumer_secret = settings.MPESA_CONSUMER_SECRET
    api_URL = settings.MPESA_API_URL
class MpesaAccessToken:
    r = requests.get(MpesaC2bCredential.api_URL,
                     auth=HTTPBasicAuth(MpesaC2bCredential.consumer_key, MpesaC2bCredential.consumer_secret))
    mpesa_access_token = json.loads(r.text)
    validated_mpesa_access_token = mpesa_access_token['access_token']
class LipanaMpesaPpassword:
    lipa_time = datetime.now().strftime('%Y%m%d%H%M%S')
    Business_short_code = settings.MPESA_SHORT_CODE
    passkey = settings.MPESA_PASSKEY
    data_to_encode = Business_short_code + passkey + lipa_time
    online_password = base64.b64encode(data_to_encode.encode())
    decode_password = online_password.decode('utf-8')
logger = get_task_logger(__name__)


@celery_app.task(name="check_mpesa_response")
def check_mpesa_confirmation(phone_number):
    """checks if mpesa confirmation has been returned"""
    logger.info("Checking for confirmation")
    print("\n\n\n", phone_number, '\n\n\n')
    # try:
    #     exists = Payments.objects.get(order_id=order_id)
    #     if exists:
    #         my_order = Orders.objects.get(id=order_id)
    #         my_order.status = 'S'
    #         my_order.save()
    #         return logger.info("Payment made successfully")
    # except BaseException as e:
    #     logger.info("Not yet reflected")
    #     check_mpesa_confirmation.s(order_id).apply_async(countdown=60)


@celery_app.task(name="Perform Transaction")
def perform_transaction(payer_mobile_no, amount, payment_id):
    """
    Perform Lipa na mpesa transaction
    """
    access_token = MpesaAccessToken.validated_mpesa_access_token
    api_url = settings.MPESA_STKPUSH
    headers = {"Authorization": "Bearer %s" % access_token}
    request = {
        "BusinessShortCode": LipanaMpesaPpassword.Business_short_code,
        "Password": LipanaMpesaPpassword.decode_password,
        "Timestamp": LipanaMpesaPpassword.lipa_time,
        "TransactionType": "CustomerPayBillOnline",
        "Amount": amount,
        "PartyA": payer_mobile_no.split('+')[::-1][0],
        "PartyB": LipanaMpesaPpassword.Business_short_code,
        "PhoneNumber": payer_mobile_no.split('+')[::-1][0],
        "CallBackURL": f"{settings.MPESA_CALLBACK_URL}/{payment_id}/",
        "AccountReference": "Misionary Family",
        "TransactionDesc": "Missionary Family"
    }
    requests.post(api_url, json=request, headers=headers)
