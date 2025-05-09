import Header from "@/src/app/(pages)/(home)/components/header/header";
import Footer from "@/src/app/(pages)/(home)/components/footer/footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
