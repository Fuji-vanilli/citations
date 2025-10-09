"use server";

import { prisma } from "@/lib/prisma"
import { redirect } from "next/navigation";

export async function createCitationAction(citation: {
    text: string,
    author: string
}) {
    try {
        await prisma.citation.create({
            data: {
                text: citation.text,
                author: citation.author
            }
        });
        redirect("/admin");
    } catch (e) {
        return {
             error: "Error while creating new citation"
        }
    }
}