import { NextRequest, NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json({
        status: "ok"
    })
}

export async function POST(request: NextRequest) {
    const formData = await request.formData();

    const data = {
        citation: formData.get("citation"),
        author: formData.get("author")
    }

    console.log("data : ", data);
    return NextResponse.json({
        created: data
    })
}