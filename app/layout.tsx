import Navigation from "@/components/Navigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-8 pt-10">
        <Navigation></Navigation>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
