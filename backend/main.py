from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import openai_routes


app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routes
app.include_router(openai_routes.router)
