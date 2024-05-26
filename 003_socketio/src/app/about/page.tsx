import { LoremIpsum } from "@/components/LoremIpsum";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center">
            <LoremIpsum repeat={1} />

        </main>
    )
}
