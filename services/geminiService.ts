
import { GoogleGenAI, Type } from "@google/genai";
import { LandingPageData } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateLandingContent = async (niche: string): Promise<LandingPageData> => {
  const prompt = `Generate a complete landing page structure and high-converting copy for a business in the niche: "${niche}". 
  The response should be professional, modern, and engaging. 
  Include a hero section, 3 core features, 3 pricing tiers (Basic, Pro, Enterprise), and 2 testimonials.`;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          companyName: { type: Type.STRING },
          niche: { type: Type.STRING },
          hero: {
            type: Type.OBJECT,
            properties: {
              headline: { type: Type.STRING },
              subheadline: { type: Type.STRING },
              cta: { type: Type.STRING }
            },
            required: ["headline", "subheadline", "cta"]
          },
          features: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                icon: { type: Type.STRING, description: "A font awesome icon class name like 'fa-rocket'" }
              },
              required: ["title", "description", "icon"]
            }
          },
          pricing: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                price: { type: Type.STRING },
                features: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING }
                },
                isPopular: { type: Type.BOOLEAN }
              },
              required: ["name", "price", "features"]
            }
          },
          testimonials: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                role: { type: Type.STRING },
                content: { type: Type.STRING },
                avatar: { type: Type.STRING }
              },
              required: ["name", "role", "content", "avatar"]
            }
          }
        },
        required: ["companyName", "niche", "hero", "features", "pricing", "testimonials"]
      }
    }
  });

  try {
    const data = JSON.parse(response.text || '{}');
    return data as LandingPageData;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Invalid content generated. Please try again.");
  }
};
