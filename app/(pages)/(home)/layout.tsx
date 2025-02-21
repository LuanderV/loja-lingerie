import Header from "@/app/components/header/page";

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
      </body>
    </html>
  );
}
