import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Create new citation</CardTitle>
            </CardHeader>
            <CardContent>
                <form action= "/api/citations" method="post" className="flex flex-col gap-3">
                    <Label>Citation</Label>
                    <Input name="citation"/>
                    <Label>Author</Label>
                    <Input name="author"/>
                    <Button type="submit" className="flex flex-col mt-4">Create</Button>
                </form>
            </CardContent>
        </Card>
    );
}