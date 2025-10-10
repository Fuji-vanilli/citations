import { Header } from "@/components/ui/header";
import { Children, PropsWithChildren } from "react";

export default function(props: PropsWithChildren ) {
    return (
        <div className="flex flex-col gap-4">
            <Header />
            { props.children }
        </div>
    )
}