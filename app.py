from flask import Flask, request
import base64

import torch
from lavis.models import load_model_and_preprocess
import io
import torch
from PIL import Image

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
# loads BLIP caption base model, with finetuned checkpoints on MSCOCO captioning dataset.
# this also loads the associated image processors
model, vis_processors, _ = load_model_and_preprocess(name="blip_caption", model_type="base_coco", is_eval=True, device=device)

# Initialize App
app = Flask(__name__)

@app.route("/get_text",methods=['POST'])
def get_text():
    captions = ""
    if request.method == 'POST':
        imgdata = base64.b64decode(str(request.json()['img_string']))
        print(imgdata)
        img = Image.open(io.BytesIO(imgdata))
        caption_text = model.generate({"image":img})
        return ({'text':caption_text})

if __name__ == "__main__":
    app.run(debug=True)
