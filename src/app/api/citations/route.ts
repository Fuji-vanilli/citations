import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    const citations = await prisma.citation.findMany();
    return citations;
}

export async function POST(request: NextRequest) {
    const json = await request.json();

    await new Promise((r) => setTimeout(r, 1000));
    const createdCitation = await prisma.citation.create({
        data: {
            text: json.text,
            author: json.author
        }
    });

    return NextResponse.json({
        created: createdCitation
    });
}