export default function ExportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>ProductOS Pitch Deck - Export</title>
        <meta name="robots" content="noindex" />
      </head>
      <body style={{ margin: 0, padding: 0, background: '#000' }}>
        {children}
      </body>
    </html>
  );
}
