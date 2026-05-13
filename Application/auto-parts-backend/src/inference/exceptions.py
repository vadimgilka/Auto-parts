# inference/exceptions.py
class InferenceError(Exception):
    pass


class ModelLoadError(InferenceError):
    pass


class InvalidImageError(InferenceError):
    pass


class PredictionError(InferenceError):
    pass
