import type { ReactElement } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen min-h-0 w-screen min-w-0 flex-col-reverse overflow-hidden bg-gray-200 sm:flex-row">
      <main className="flex min-h-0 min-w-0 flex-1 flex-col overflow-auto sm:h-full">
        <Header />
        <section className="flex h-full">
          <Sidebar />
          <div>{children}</div>
        </section>
      </main>
    </div>
  );
}
