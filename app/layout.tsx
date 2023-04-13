import "./globals.css";

export const metadata = {
  title: "Parallel Route - Two Column Layout",
  description: "Example showing next.js parallel route for a two column layout",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" overflow-hidden">{children}</body>
    </html>
  );
}
