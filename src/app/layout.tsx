import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Reimagine Banking with Finastra | Dubai 2024",
  description:
    "Join industry leaders in Dubai to explore innovative banking solutions and transformative strategies. Premium banking technology conference.",
  keywords: "banking, fintech, finastra, dubai, conference, financial technology, innovation",
  authors: [{ name: "Finastra" }],
  creator: "Finastra",
  publisher: "Finastra",
  openGraph: {
    title: "Reimagine Banking with Finastra | Dubai 2024",
    description:
      "Join industry leaders in Dubai to explore innovative banking solutions and transformative strategies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reimagine Banking with Finastra | Dubai 2024",
    description:
      "Join industry leaders in Dubai to explore innovative banking solutions and transformative strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${dmSans.variable} antialiased light`}
      suppressHydrationWarning 
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false} 
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
