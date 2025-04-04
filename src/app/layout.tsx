import type { Metadata } from "next";
import "./globals.css";
import AuthProvider from "@/src/modules/core/providers/SessionProvider";
import {ThemeProvider} from "@/src/modules/core/providers/ThemeProvider";




export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AuthProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme={"system"}
            enableSystem={true}
            disableTransitionOnChange={true}
          >
            {children}
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
