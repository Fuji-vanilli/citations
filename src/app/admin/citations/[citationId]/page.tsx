import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { CitationForm } from "../citation-form";

export default async function Page(props: {
    params: Promise<{
        citationId: string
    }>
}) {
    const params= await props.params;
    const citation = await prisma.citation.findUnique({
        where: {id: Number(params.citationId),}
    })
    return (
        <Card>
            <CardHeader>
                <CardTitle></CardTitle>
            </CardHeader>
            <CardContent>
                <CitationForm citation= {citation ?? undefined}/>
            </CardContent>
        </Card>
    );
}