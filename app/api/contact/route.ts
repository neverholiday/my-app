// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  console.log("Received contact:", body);

  return NextResponse.json({
    message: 'Form received',
    data: body,
  });
}
