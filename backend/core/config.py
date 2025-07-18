import os
from dotenv import load_dotenv
from openai import OpenAI

load_dotenv()

def get_openai_client():
    return OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
