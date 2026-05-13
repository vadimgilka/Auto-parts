from fastapi import APIRouter, UploadFile, File, Depends
from inference.base import BaseDetector
from inference.loader import get_detector


router = APIRouter(prefix='/inference', tags=['inference'])


@router.post('/classify')
async def classify_image(
    image: UploadFile = File(...), 
    detector: BaseDetector = Depends(get_detector),
):
    image_bytes = await image.read()
    predictions = await detector.predict(image_bytes)

    if not predictions.detections:
        return {'message': 'No objects detected'}

    main_prediction = max(predictions.detections, key=lambda det: det.confidence)
    return main_prediction
