from openai import OpenAI
from libs.prompts import prompt_templates
from core.config import get_openai_client

async def analyze_segment(segment: str) -> dict:
    client = get_openai_client()

    prompts = [
        f"{i + 1}. [{key}]\n{template(segment)}"
        for i, (key, template) in enumerate(prompt_templates.items())
    ]
    combined_prompt = "\n".join(prompts)

    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {
                    "role": "user",
                    "content": f"You're a product strategist. Respond to the following SWOT-style questions clearly and with labeled sections:\n\n{combined_prompt}"
                }
            ],
            temperature=0.7,
        )

        return {"result": response.choices[0].message.content}
    except Exception as e:
        return {"error": str(e)}
