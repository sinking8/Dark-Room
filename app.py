from flask import Flask, request
import cv2
import pafy

import torch
from lavis.models import load_model_and_preprocess

import torch
from PIL import Image

# load sample image
raw_image = Image.open("./demo2.jpeg").convert("RGB")

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
        #video_url = request.get_json()["video_url"]
        video_url = "https://www.youtube.com/watch?v=JuBBIJ7adjM"

        # Extracting pafy instance
        video = pafy.new(video_url)
        best = video.getbest(preftype="mp4")

        # Open a sample video available in sample-videos
        vcap = cv2.VideoCapture(best.url)
        #if not vcap.isOpened():
        #    print "File Cannot be Opened"

        while(True):
            # Capture frame-by-frame
            ret, frame = vcap.read()
            #print cap.isOpened(), ret
            if frame is not None:
                # Display the resulting frame
                cv2.imshow('frame',frame)
                # Press q to close the video windows before it ends if you want
                if cv2.waitKey(22) & 0xFF == ord('q'):
                    break
            else:
                print("Frame is None")
                break

        # When everything done, release the capture
        vcap.release()
        cv2.destroyAllWindows()
        # image = vis_processors["eval"](raw_image).unsqueeze(0).to(device)
        # caption_text = model.generate({"image":image})
        # return {"text":caption_text}

def run_video():
    captions = ""
    if request.method == 'POST':
        #video_url = request.get_json()["video_url"]
        video_url = "https://www.youtube.com/watch?v=JuBBIJ7adjM"

        # Extracting pafy instance
        video = pafy.new(video_url)
        best = video.getbest(preftype="mp4")

        # Open a sample video available in sample-videos
        vcap = cv2.VideoCapture(best.url)
        #if not vcap.isOpened():
        #    print "File Cannot be Opened"

        while(True):
            # Capture frame-by-frame
            ret, frame = vcap.read()
            #print cap.isOpened(), ret
            if frame is not None:
                # Display the resulting frame
                cv2.imshow('frame',frame)
                # Press q to close the video windows before it ends if you want
                if cv2.waitKey(22) & 0xFF == ord('q'):
                    break
            else:
                print("Frame is None")
                break

        # When everything done, release the capture
        vcap.release()
        cv2.destroyAllWindows()  


if __name__ == "__main__":
    run_video()
    #app.run(debug=True)
