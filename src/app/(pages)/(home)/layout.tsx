import Header from "@/src/app/(pages)/(home)/(components)/(header)/page";
import Footer from "@/src/app/(pages)/(home)/(components)/(footer)/page";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
