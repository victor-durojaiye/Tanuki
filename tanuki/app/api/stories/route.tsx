import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
  
export async function GET() {   
    const stories = await prisma.story.findMany();
    return NextResponse.json(stories);
}


export async function POST() {   
    return NextResponse.json({message:'method allow'})
}
