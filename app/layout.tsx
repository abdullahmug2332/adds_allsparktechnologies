import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",     // expose as CSS var
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Rajdhani Font CDN */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakarta.variable} antialiased !w-[100vw] !overflow-x-hidden `}
      >
        
        <div>
        {children}
        </div>
      </body>
    </html>
  );
}

// app/layout.tsx (or app/(whatever)/layout.tsx)
// import { Plus_Jakarta_Sans } from "next/font/google";
// import "./globals.css";

// const plusJakarta = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-sans",     // expose as CSS var
//   display: "swap",
// });



// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={`${plusJakarta.variable} font-sans antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }
