import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";

const Layout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-border/50 py-8 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        © {new Date().getFullYear()} · Portfólio
      </footer>
    </div>
  );
};

export default Layout;
