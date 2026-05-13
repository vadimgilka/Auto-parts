from inference.base import BaseDetector
from inference.schemas import InferenceResult, Detection, BBox
from inference.exceptions import ModelLoadError
from core.config import settings

import cv2
import numpy as np
from ultralytics import YOLO



class YOLODetector(BaseDetector):
    def __init__(self):
        try:
            self.model = YOLO(settings.MODEL_PATH)
        except Exception as e:
            raise ModelLoadError(f'Failed to load model from {settings.MODEL_PATH}') from e
    
    async def predict(self, image: bytes) -> InferenceResult:
        np_img = np.frombuffer(image, np.uint8)
        img = cv2.imdecode(np_img, cv2.IMREAD_COLOR)

        results = self.model(img)[0]

        detections = []
        for result in results.boxes:
            bbox = result.xyxy[0].cpu().numpy()
            x1, y1, x2, y2 = bbox
            confidence = float(result.conf.cpu().numpy())
            class_id = int(result.cls.cpu().numpy())
            label = self.model.names[class_id]

            detection = Detection(
                label=label,
                confidence=confidence,
                bbox=BBox(x1=float(x1), y1=float(y1), x2=float(x2), y2=float(y2))
            )
            detections.append(detection)

        height, width, _ = img.shape

        return InferenceResult(
            detections=detections,
            image_width=width,
            image_height=height
        )
