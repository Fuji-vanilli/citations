import { Card, CardHeader, CardTitle } from "./card";

export function Header() {
    return (
        <Card className="p-4">
            <CardHeader>
                <CardTitle>Citations</CardTitle>
            </CardHeader>
        </Card>
    )
}