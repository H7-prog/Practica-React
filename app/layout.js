export const metadata = {
  title: 'React Foundations – Next.js',
  description: 'From React to Next.js (App Router)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: 24 }}>
        {children}
      </body>
    </html>
  );
}
