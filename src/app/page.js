import Footer from "@/Components/ui/Footer";
import Navbar from "@/Components/ui/Navbar";
import Hero from "@/Pages/beranda";
import CeritaKami from "@/Pages/CeritaKami";
import Lokasi from "@/Pages/lokasi";
import Menu from "@/Pages/menu"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CeritaKami/>
      <Menu/>
      <Lokasi />
      <Footer/>
    </>
  );
}


// 