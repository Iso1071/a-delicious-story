import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-8 pt-10" >
        <a className="text-2xl underline underline-offset-8 mb-8 block" href="/">
          <div>A Delicious Story</div>
        </a>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
