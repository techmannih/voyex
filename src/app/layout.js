import "./globals.css";

export const metadata = {
  title: "Voyex",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
