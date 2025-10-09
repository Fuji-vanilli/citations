"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormStatus } from "react-dom";
import { createCitationAction } from "./citation.action";

export default function Page() {
    const createCitation = async (FormData: FormData) => {
        const json = await createCitationAction({
            text: String(FormData.get("citation")),
            author: String(FormData.get("author")),
        });
        
        if (json.error) {
            alert("Somme error occured "+ json.error);
        }
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create new citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form action= { async (formData)=> {
                    await  createCitation(formData)
                }} className="flex flex-col gap-3">
                    <Label>Citation</Label>
                    <Input name="citation"/>
                    <Label>Author</Label>
                    <Input name="author"/>
                    <SubmitButton />
                </form>
            </CardContent>
        </Card>
    );
}

const SubmitButton = ()=> {
    const { pending } = useFormStatus();
    return (
        <Button 
            disabled= { pending } 
            type="submit" 
            className="flex flex-col mt-4">
                { pending ? "Loading . . ." : "Create" }
        </Button>
    );
}