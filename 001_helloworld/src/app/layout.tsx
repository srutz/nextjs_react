import type { Metadata } from "next";
import { Inter, Roboto, Pacifico } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { MenuBar } from "@/components/MenuBar";

const font1 = Inter({ subsets: ["latin"] })
const font2 = Roboto({ weight: "400", subsets: ["latin-ext"]})
const font3 = Pacifico({ weight: "400", subsets: ["latin-ext"]})

export const metadata: Metadata = {
    title: "Next.js Helloworld",
    description: "Helloworld Next.js app",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={font2.className}>
                <MenuBar ></MenuBar>
                <div className="flex flex-col grow h-4 p-4 overflow-y-auto">
                    {children}
                </div>
            </body>
        </html>
    )
}