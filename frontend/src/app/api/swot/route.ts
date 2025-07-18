import { NextResponse } from "next/server";
import OpenAI from "openai";
import { promptTemplates } from "@/libs/prompts";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


export async function GET() {
  return NextResponse.json({ message: "API route works" });
}


// export async function POST(req: Request) {
//   try {
//     const { segment } = await req.json();

//     const allPrompts = Object.entries(promptTemplates).map(
//       ([key, template], index) => {
//         const label = key.replace(/([A-Z])/g, ' $1').trim();
//         return `${index + 1}. [${label}]\n${template(segment)}\n`;
//       }
//     ).join('\n');

//     console.log(allPrompts)

//     const chat = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo', // or 'gpt-4'
//       messages: [
//         {
//           role: 'user',
//           content: `You're a product strategist. Respond to the following SWOT-style questions clearly and with labeled sections:\n\n${allPrompts}`,
//         },
//       ],
//       temperature: 0.7,
//     });

//     const result = chat.choices[0]?.message?.content || 'No response.';
//     return NextResponse.json({ result });
//   } catch (err: any) {
//     console.error('OpenAI Error:', err);
//     return NextResponse.json({ result: 'Error fetching response.' }, { status: 500 });
//   }
// }


export async function POST(req: Request) {
  const { segment } = await req.json();

  const response = await fetch("http://localhost:8000/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ segment }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), { status: response.status });
}
