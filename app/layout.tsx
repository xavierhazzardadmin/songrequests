/* eslint-disable @next/next/no-head-element */
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
          <link rel="stylesheet preload" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
