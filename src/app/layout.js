import Subscribe from "@/components/shared/subscribe/Subscribe";
import "./globals.css";
import LoadingBarZ from "@/components/shared/loading/LoadingBar";
import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoadingBarZ />
        <Header />
        {children}
        <Subscribe />
        <Footer />
      </body>
    </html>
  );
}
