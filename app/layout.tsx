import "./globals.css";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Image
            src="https://assets.butterfly.ai/email-images/bf-banner.v2.png"
            fill
            alt="logo"
          />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
