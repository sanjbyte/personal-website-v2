import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./tailwind.css"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sanjnah - Personal Website",
  description: "Personal website of Sanjnah, Data Security PM at Salesforce",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="min-h-screen bg-background text-foreground">
            <ThemeToggle />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

