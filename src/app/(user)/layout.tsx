import { Toaster } from "react-hot-toast";
import "@/src/app/globals.css";
import Header from "./(home)/components/header/header";
import Footer from "./(home)/components/footer/footer";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Loja Lingerie",
  description: "Description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Toaster position="top-center"/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
