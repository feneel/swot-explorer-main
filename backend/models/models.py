from pydantic import BaseModel

class SegmentRequest(BaseModel):
    segment: str
