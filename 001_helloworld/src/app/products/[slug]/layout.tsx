import { ReactNode } from "react";

export default function Layout(props: { children: ReactNode }) {
    return (
        <div className="flex gap-4">
            {props.children}
        </div>
    )
}