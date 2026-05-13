from fastapi import APIRouter
from api import meta, status, inference

router = APIRouter(prefix='/api')

router.include_router(meta.router)
router.include_router(status.router)
router.include_router(inference.router)
