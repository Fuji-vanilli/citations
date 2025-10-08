import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-auto">
      <Card>
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
        </CardHeader>
        <CardContent>
          <Link 
            href="/admin"
            className= {buttonVariants({ size: "lg", variant: "outline"})}>
          Connected on Admin
      </Link>
        </CardContent>
      </Card>
    </div>  
  
  );
}
