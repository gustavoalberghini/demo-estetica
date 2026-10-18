
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ateliê — Estética & Bem-Estar | Conceito Demonstrativo",
  description:
    "Um conceito visual de estética premium, com uma experiência digital delicada, serviços de cuidado pessoal e contato para agendamento.",
  applicationName: "Ateliê — Conceito Demonstrativo",
  robots: {
    index: false,
    follow: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8f6f1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
