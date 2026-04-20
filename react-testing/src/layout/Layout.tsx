import type { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import type { View } from "./Sidebar";

type LayoutProps = {
  children: ReactNode;
  activeView: View;
  onChangeView: (view: View) => void;
};

function Layout({ children, activeView, onChangeView }: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar activeView={activeView} onChangeView={onChangeView} />

      <div className="flex min-h-screen flex-1 flex-col">
        <main className="flex-1 bg-gray-50 p-6">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
