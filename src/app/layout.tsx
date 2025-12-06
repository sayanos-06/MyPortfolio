import type { Metadata } from "next";
import "./globals.css";
import AppWindowShell from "@/components/AppWindowShell";
import MacSidebar from "@/components/MacSidebar";
import { ToastProvider } from "@/components/ToastProvider"; // ✅ named import
import PageTransition from "@/components/PageTransition";
import { SearchProvider } from "@/components/SearchContext";

export const metadata: Metadata = {
  title: "Sayantan Sen Apps",
  description: "App Store style portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100">
        <ToastProvider>
          <SearchProvider>
            <AppWindowShell sidebar={<MacSidebar />}>
              <PageTransition>{children}</PageTransition>
            </AppWindowShell>
          </SearchProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
