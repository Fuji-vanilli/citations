import { Card, CardContent } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";

export default async function Page(props: {
    params: Promise<{
        citationId: string
    }>
}) {
    const params = props.params;
    const citation = await prisma.citation.findUnique({
        where: { id: Number((await params).citationId) }
    });

    return (
        <div className="min-h-full flex items-center justify-center">
            <Card className="p-4 flex items-start gap-4" key={citation?.id}>
                <div className="flex flex-col gap-2 flex-1">
                    <p className="relative pl-8 italic">
                        “ {citation?.text} ”
                    </p>
                    <p className="p-4">-- {citation?.author}</p>
                </div>
            </Card>
        </div>
    )
}