"user client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Page() {
    const [isLoading, setIsLoading] = useState(false);

    const createCitation = async (FormData: FormData) => {
        setIsLoading(true);
        const result = await fetch(`/api/citations`, {
            body: JSON.stringify({
                text: FormData.get("citation"),
                author: FormData.get("author")
            }),
            method: "POST"
        })

        const json = await result.json();
        setIsLoading(false);
        console.log(json);
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create new citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form action= { async (formData)=> {
                    await createCitation(formData)
                }} className="flex flex-col gap-3">
                    <Label>Citation</Label>
                    <Input name="citation"/>
                    <Label>Author</Label>
                    <Input name="author"/>
                    <Button disabled= {isLoading} type="submit" className="flex flex-col mt-4">Create</Button>
                </form>
            </CardContent>
        </Card>
    );
}