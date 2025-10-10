"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import { createCitationAction, updateCitationAction } from "./citation.action";
import { Citation } from "@/generated/prisma";

export function CitationForm(props: { citation?: Citation }) {
    const onSubmit = async (FormData: FormData) => {
        let error: null | string = null;
        if (props.citation) {
            const json = await updateCitationAction(props.citation.id, {
                text: String(FormData.get("citation")),
                author: String(FormData.get("author")),
            });

            error = json.error;
        } else {
            const json = await createCitationAction({
                text: String(FormData.get("citation")),
                author: String(FormData.get("author")),
            });

            error = json.error;
        }
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.citation ? "Update" : "Create"} citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form action={async (formData) => {
                    await onSubmit(formData)
                }} className="flex flex-col gap-3">
                    <Label>Citation</Label>
                    <Input defaultValue={props.citation?.text} name="citation" />
                    <Label>Author</Label>
                    <Input defaultValue={props.citation?.author} name="author" />
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    );
}

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <Button
            disabled={pending}
            type="submit"
            className="flex flex-col mt-4">
            {pending ? "Loading . . ." : "Create"}
        </Button>
    );
}