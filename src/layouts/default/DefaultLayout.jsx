import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
