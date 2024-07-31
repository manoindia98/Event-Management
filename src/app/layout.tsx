import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ui/theme-provider"
import { Inter } from "next/font/google";
import "./globals.css";
<<<<<<< HEAD
import { Toaster } from 'react-hot-toast';
=======
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { dark, shadesOfPurple } from '@clerk/themes';
>>>>>>> Ankit


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ManoIndia",
  description: "One Stop Solution for running ads, Event Managment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
    appearance={{
      baseTheme: [dark, shadesOfPurple]
    }}
    >
    <html lang="en">
      <body className={inter.className}>
      <header>
      </header>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster/>

            
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
