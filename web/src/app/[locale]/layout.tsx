import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { PageTransitionProvider } from "@/providers/PageTransitionProvider";
import { FloatingNavButton } from "@/components/layouts/navigations/FloatingNavButton";
import { VARIABLE_COLOR } from "@/constant/variables";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Muhamad Aqil Maulana",
    default: "Muhamad Aqil Maulana",
  },
};

export default function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
      style={{ background: VARIABLE_COLOR.BLUE_PRIMARY }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider>
          <PageTransitionProvider>
            <main className="overflow-x-hidden">
              <FloatingNavButton />
              {children}
            </main>
          </PageTransitionProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
