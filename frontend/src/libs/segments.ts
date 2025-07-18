export const segments = [
  "Gen Z Creators",
  "Urban Climate Advocates",
  "Cost-Sensitive SMB Owners",
  "Retired DIYers",
  "Enterprise IT Leaders"
] as const;

export type Segment = (typeof segments)[number];
