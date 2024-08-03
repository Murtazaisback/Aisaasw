import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"] ,
  weight:["400", "500", "600", "700"],
  variable: '--flex-ibm-plex'

});

export const metadata: Metadata = {
  title: "Nekola AI",
  description: "Nekola AI saas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const publishableKey = "pk_test_cHJvdWQtcm9kZW50LTgzLmNsZXJrLmFjY291bnRzLmRldiQ";
  return (
    <ClerkProvider 
    // publishableKey={publishableKey}
    appearance={{
      variables: {colorPrimary: "#624cf5"}
    }}>

    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>{children}</body>
    </html>
    </ClerkProvider>
  );
}
