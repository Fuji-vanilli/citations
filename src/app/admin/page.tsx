import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Car } from "lucide-react";
import Link from "next/link";
import { DeleteCitationButton } from "./delete-citation-button";

export default async function Page() {
    const citations = await prisma.citation.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })

    return (
        <Card>
            <CardHeader>
                <CardTitle>Admin page</CardTitle>
                <Link
                    href="admin/citations/create"
                    className={buttonVariants({ size: "lg", variant: "outline" })}>
                    Add new Citation
                </Link>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                {citations.map(citation => (
                    <Card className="p-4 flex items-start justify-between gap-4" key={citation.id}>
                        <div className="flex flex-col gap-2 flex-1">
                            <p className="relative pl-8 italic before:absolute before:left-0 before:top-0">
                                “ {citation.text} ”
                            </p>
                            <p className="pl-8 text-sm text-muted-foreground">-- {citation.author}</p>
                        </div>
                        <div className="flex flex-col gap-2 items-end">
                            <DeleteCitationButton id= {citation.id} />
                            <Link 
                                className= {buttonVariants({ size: "sm", variant: "outline"})}
                                href={`/admin/citations/${citation.id}`}
                            >
                                🖊️
                            </Link>
                            <Link 
                                className= {buttonVariants({ size: "sm", variant: "outline"})}
                                href={`/citations/${citation.id}`}
                            >
                                 📌
                            </Link>
                        </div>
                        
                    </Card>
                ))}
            </CardContent>
        </Card>
    )
}  