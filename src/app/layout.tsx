import { Metadata } from "next";
export const metadata: Metadata = {
    title: {
        default: "Algorhythm",
        template: "%s | Algorhythm",
    },
    description: "Get your artists to break through the noise.",
};

import localFont from "next/font/local";

const neue = localFont({
    src: [
        {
            path: "../../public/assets/fonts/neue-einstellung/NeueEinstellung-Regular.ttf",
            weight: "400",
        },
        {
            path: "../../public/assets/fonts/neue-einstellung/NeueEinstellung-Bold.ttf",
            weight: "700",
        },
    ],
    variable: "--font-neue",
});

import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${neue.variable}`}
        >
            <body className="bg-black text-white flex flex-col justify-start">
                {children}
            </body>
        </html>
    );
}
