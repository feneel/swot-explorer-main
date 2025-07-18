export const promptTemplates = {
  OKRs: (segment: string) =>
    `What are 3 measurable marketing OKRs to grow usage in the ${segment}?`,
  Strengths: (segment: string) =>
    `What product strengths matter most to a ${segment}?`,
  Weaknesses: (segment: string) =>
    `What would the ${segment} be concerned about or dislike?`,
  Opportunities: (segment: string) =>
    `What product or brand opportunities can we unlock by targeting the ${segment}?`,
  Threats: (segment: string) =>
    `What risks might prevent the ${segment} from adopting or staying loyal?`,
  MarketPositioning: (segment: string) =>
    `How should we position the product to resonate with the ${segment}?`,
  BuyerPersona: (segment: string) =>
    `Write a sample persona for a typical ${segment} customer.`,
  StrategicValue: (segment: string) =>
    `Why is this ${segment} strategically valuable from a growth/investment perspective?`,
  Channels: (segment: string) =>
    `How should we reach and activate the ${segment}?`,
};

export type PromptType = keyof typeof promptTemplates;
