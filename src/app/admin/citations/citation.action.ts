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
    } catch (e) {
        return {
             error: "Error while creating new citation"
        }
    }
    redirect("/admin");
}

export async function updateCitationAction(id: number, citation: {
    text: string,
    author: string
}) {
    try {
        await prisma.citation.update({
            where: { id, },
            data: {
                text: citation.text,
                author: citation.author
            }
        });
    } catch (e) {
        return {
             error: "Error while creating update citation"
        }
    }
    redirect("/admin");
}

export async function  deleteCitationAction (id: number) {
    await prisma.citation.delete({
        where : { id }
    })

    return {
        message: "Deleted successfuly!"
    };
};