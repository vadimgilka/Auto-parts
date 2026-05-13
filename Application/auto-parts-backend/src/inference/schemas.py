from pydantic import BaseModel
from typing import List


class BBox(BaseModel):
    x1: float
    y1: float
    x2: float
    y2: float


class Detection(BaseModel):
    label: str
    confidence: float
    bbox: BBox


class InferenceResult(BaseModel):
    detections: List[Detection]
    image_width: int
    image_height: int
