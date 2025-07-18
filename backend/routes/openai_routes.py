from fastapi import APIRouter
from models.models import SegmentRequest
from services.openai_service import analyze_segment

router = APIRouter()

@router.post("/analyze")
async def analyze(request: SegmentRequest):
    return await analyze_segment(request.segment)
