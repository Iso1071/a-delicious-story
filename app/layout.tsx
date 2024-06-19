import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="p-8 pt-10" >
        <a className="text-2xl" href="/">
          <div>A Delicious Story</div>
        </a>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
