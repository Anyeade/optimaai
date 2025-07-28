import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Together from "together-ai";

export const runtime = "nodejs";
export const maxDuration = 300;

const TOGETHER_API_KEY = "d0c26b19922f03bbaba0105e1fa360d9cac5ee6f38df3bc9fa61bfde6da1ed2a";

export async function POST(req: NextRequest) {
  const { messages, model } = await req.json();
  const together = new Together({ apiKey: TOGETHER_API_KEY });
  const res = await together.chat.completions.create({
    model,
    messages,
    stream: true,
    temperature: 0.2,
    max_tokens: 9000,
  });
  return new NextResponse(res.toReadableStream());
}
