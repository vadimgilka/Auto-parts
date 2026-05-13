from functools import lru_cache
from inference.yolo import YOLODetector


@lru_cache()
def get_detector() -> YOLODetector:
    return YOLODetector()
