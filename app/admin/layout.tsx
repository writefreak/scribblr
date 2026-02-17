import type { Metadata } from "next";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import AdminHeader from "@/components/admin/admin-header";
import MobileNav from "@/components/admin/mobile-nav";

export const metadata: Metadata = {
  title: "The Scribblr Admin",
  description: "The Scribblr Admin",
};

export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = null;
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AdminSidebar user={user} pendings={0} />
      <SidebarInset>
        <div className="px-4 py-4 not-dark:bg-[#eef1f9]/30">
          <div className="flex justify-end pb-4">
            <MobileNav />
          </div>
          <AdminHeader />
        </div>
        <div className="flex flex-1 flex-col not-dark:bg-[#eef1f9]/30">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-4">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
