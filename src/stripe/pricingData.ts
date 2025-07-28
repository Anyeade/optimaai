import { Price } from "@/types/price";

export const pricingData: Price[] = [
  {
    id: "trio-free",
    unit_amount: 0,
    nickname: "Personal (Free)",
    offers: [
      "1 User",
      "Build AI apps locally (on your device)",
      "Private, local-first AI",
      "Up to 128K context window (Trio Model)",
      "Basic code & markdown chat",
      "Community support",
    ],
  },
  {
    id: "trio-pro",
    unit_amount: 20 * 100,
    nickname: "Pro",
    offers: [
      "1 User",
      "Full 2M context window (Trio Model)",
      "AI web search & citations",
      "Real-time collaboration",
      "Cross-platform (Windows, Mac, Linux)",
      "Priority email support",
      "Advanced AI app builder features",
    ],
  },
  {
    id: "trio-team",
    unit_amount: 50 * 100,
    nickname: "Team",
    offers: [
      "Up to 10 Users",
      "All Pro features",
      "Team management & permissions",
      "Advanced collaboration tools",
      "Volume discount",
      "Dedicated onboarding & support",
    ],
  },
];
