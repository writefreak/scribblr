import { Header } from "@/components/home/header";
import Footer from "@/components/shared/footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex w-full justify-center">
        <Header />
      </div>

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
}
