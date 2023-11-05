import requests
from gtts import gTTS
import os 

import base64 
# API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
# headers = {"Authorization": "Bearer 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"}

# def query(filename):
#     with open(filename, "rb") as f:
#         data = f.read()
#     response = requests.post(API_URL, headers=headers, data=data)
#     print(response.json())
#     return response.json()


filename = "demo2.jpeg"
with open(filename, "rb") as f:
    print(f.read())
    data = base64.b64encode(f.read())
API_URL = "https://flask-production-4f4a.up.railway.app/get_text"
headers = {"Content-Type": "application/json"}
response = requests.post(API_URL,headers=headers,json={"img_string":data})
print(response.json()['text'])