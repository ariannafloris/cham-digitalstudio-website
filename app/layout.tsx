import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import {
  ColorSchemeScript,
  createTheme,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cham Studio",
  description: "Cham Studio design system",
};

const theme = createTheme({
  primaryColor: "primary",
  colors: {
    primary: [
      "#330028",
      "#66004f",
      "#990077",
      "#cc009f",
      "#ff00c7",
      "#ff33d2",
      "#ff66dd",
      "#ff99e9",
      "#ffccef",
      "#fff0fb",
    ],
    secondary: [
      "#331700",
      "#662d00",
      "#994400",
      "#cc5a00",
      "#ff7100",
      "#ff8d33",
      "#ffaa66",
      "#ffc699",
      "#ffe3cc",
      "#fff4eb",
    ],
    neutral: [
      "#000000",
      "#111111",
      "#222222",
      "#333333",
      "#555555",
      "#777777",
      "#999999",
      "#cccccc",
      "#f7f7f7",
      "#ffffff",
    ],
  },
  fontFamily: `var(--font-inter), sans-serif`,
  headings: {
    fontFamily: `var(--font-montserrat), sans-serif`,
    fontWeight: "700",
  },
  defaultRadius: "md",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${inter.variable}`}
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
