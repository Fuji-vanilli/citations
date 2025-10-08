import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default async function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Admin page</CardTitle>
                <Link 
                    href= "admin/citations/create"
                    className= {buttonVariants({ size: "lg", variant: "outline"})}>
                    Add new Citation  
                </Link>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
                <Link 
                    href= "api/citations/"
                    className= {buttonVariants({ size: "lg", variant: "outline"})}>
                    Citation n°1    
                </Link>
            </CardContent>
        </Card>
    )
}  