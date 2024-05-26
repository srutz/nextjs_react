import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode, Suspense, useEffect } from "react";
import { MenuBar } from "@/components/MenuBar";
import { NotificationToast } from "@/components/NotificationToast";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Next.js Helloworld",
    description: "Helloworld Next.js app",
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MenuBar ></MenuBar>
                <div className="flex flex-col grow h-4 p-4 overflow-y-auto">
                    <Suspense fallback={<div>Loading...</div>}>
                        {children}
                    </Suspense>
                </div>
                <NotificationToast></NotificationToast>
            </body>
        </html>
    )
}