import { NextResponse } from "next/server";


export async function GET() {
  return NextResponse.json({ message: "API route works" });
}


export async function POST(req: Request) {
  const { segment } = await req.json();

  
  const response = await fetch(`${process.env.BACKEND_API_URL}/analyze`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ segment }),
  });

  const data = await response.json();
  return new Response(JSON.stringify(data), { status: response.status });
}
