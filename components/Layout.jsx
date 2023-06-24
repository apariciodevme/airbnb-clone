import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main> {children}</main>
      <Footer/>
    </div>
  );
}
