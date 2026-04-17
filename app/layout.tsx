import type { Metadata } from "next";
import { Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guru Ganesh · UI/UX Designer & Product Strategist",
  description:
    "Premium UI/UX designer & product strategist. I create research-backed interfaces, design systems, and user experiences that feel elevated and drive measurable results.",
  keywords: [
    "UI designer",
    "UX designer",
    "product designer",
    "design systems",
    "interface design",
  ],
  authors: [{ name: "Guru Ganesh", url: "https://guruganesh.design" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://guruganesh.design",
    title: "Guru Ganesh · UI/UX Designer & Product Strategist",
    description:
      "Premium UI/UX designer & product strategist. I create research-backed interfaces, design systems, and user experiences that feel elevated and drive measurable results.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${spaceGrotesk.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Toaster />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
