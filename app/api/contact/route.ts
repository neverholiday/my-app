import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const saved = await prisma.contact.create({
    data: { name, email, message },
  });

  return NextResponse.json({ message: "Saved to SQLite!", data: saved });
}
