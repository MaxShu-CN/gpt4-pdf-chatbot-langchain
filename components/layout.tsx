import Navbar from "./ui/Navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="mx-auto flex flex-col space-y-1">
        <header className="container sticky top-0 z-40 bg-white">
          <Navbar />
        </header>
        <div>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
