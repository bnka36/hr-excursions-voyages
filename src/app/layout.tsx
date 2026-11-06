import "./globals.css";

// Minimal root layout for the bare "/" redirect route only.
// The real, per-locale root layout lives in app/[locale]/layout.tsx —
// see https://nextjs.org/docs/app/guides/internationalization.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
