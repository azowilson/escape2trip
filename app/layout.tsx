import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { APP_NAME, APP_DESCRIPTION } from "@/lib/constants";
import { Navigation } from "@/components/common/Navigation";
import { SessionProvider } from "@/components/common/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: APP_NAME,
  description: APP_DESCRIPTION,
  keywords: ["travel", "trip planning", "route planner", "vacation", "adventure"],
  authors: [{ name: "Escape2Trip Team" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <div className="min-h-screen bg-background">
            {/* <Navigation /> */}
            <main>
              {children}
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
