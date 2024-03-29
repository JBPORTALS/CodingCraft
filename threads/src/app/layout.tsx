import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import RightBar from "@/components/rcmd-profile-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "600", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"h-screen w-screen"} style={poppins.style}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          {modal}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
