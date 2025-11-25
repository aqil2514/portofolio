import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { PageTransitionProvider } from "@/providers/PageTransitionProvider";
import { FloatingNavButton } from "@/components/layouts/navigations/FloatingNavButton";
import { VARIABLE_COLOR } from "@/constant/variables";
import { getLocale } from "next-intl/server";
import {
  AUTHOR,
  DEFAULT_OG,
  LANGUAGES,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from "@/constant/seo";
import Script from "next/script";
import { personSchema, websiteSchema } from "@/constant/schema";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: SITE_KEYWORDS,

  robots: {
    index: true,
    follow: true,
  },

  authors: [AUTHOR],
  creator: SITE_NAME,

  alternates: {
    canonical: SITE_URL,
    languages: LANGUAGES,
  },

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    ...DEFAULT_OG,
  },
};

export default async function LocaleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html lang={locale} className="overflow-x-hidden">
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <Script
          id="json-ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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
