from abc import ABC, abstractmethod

from inference.schemas import InferenceResult


class BaseDetector(ABC):
    @abstractmethod
    async def predict(self, image: bytes) -> InferenceResult:
        pass
