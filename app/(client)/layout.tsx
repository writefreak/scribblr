// import Footer from "@/components/home/footer";
// import { Navbar } from "@/components/shared/navbar";
import { Header } from "@/components/home/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scribblr",
  description: "Scribblr blog website",
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <div className="flex items-center justify-center">
          <Header />
        </div>
        {children}
        {/* <Footer /> */}
      </div>
    </>
  );
}
