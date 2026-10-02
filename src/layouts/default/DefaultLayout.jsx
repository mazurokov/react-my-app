import Header from "@layouts/default/components/header/Header";
import Footer from "@layouts/default/components/footer/Footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
