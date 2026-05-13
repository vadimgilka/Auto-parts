from fastapi import APIRouter

router = APIRouter(prefix='/meta')

@router.get('/')
def get_meta():
    return {
        'model_version': '1',
        'data_version': '1',
        'description': 'Fruit recognition model using YOLO architecture',
    }
