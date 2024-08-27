import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export default function RootLayout() {
  const currentURL = window.location.href;
  const contactPage = "http://localhost:5173/contact";
  return (
    <>
      {/* header */}
      <Header />

      {/* outlet */}
      <Outlet />

      {/* footer */}
      {/* if contact page, hide funnel */}
      <Footer withFunnel={currentURL !== contactPage} />
    </>
  );
}
