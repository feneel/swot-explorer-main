prompt_templates = {
    "OKRs": lambda segment: f"What are 3 measurable marketing OKRs to grow usage in the {segment}?",
    "Strengths": lambda segment: f"What product strengths matter most to a {segment}?",
    "Weaknesses": lambda segment: f"What would the {segment} be concerned about or dislike?",
    "Opportunities": lambda segment: f"What product or brand opportunities can we unlock by targeting the {segment}?",
    "Threats": lambda segment: f"What risks might prevent the {segment} from adopting or staying loyal?",
    "MarketPositioning": lambda segment: f"How should we position the product to resonate with the {segment}?",
    "BuyerPersona": lambda segment: f"Write a sample persona for a typical {segment} customer.",
    "StrategicValue": lambda segment: f"Why is this segment strategically valuable from a growth/investment perspective?",
    "Channels": lambda segment: f"How should we reach and activate the {segment}?",
}
