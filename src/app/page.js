import Footer from "@/Components/ui/Footer";
import Navbar from "@/Components/ui/Navbar";
import AdminDashboard from "@/Pages/admin/admins";
import Hero from "@/Pages/beranda";
import Lokasi from "@/Pages/lokasi";
import Menu from "@/Pages/menu"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu/>
      <Lokasi />
      <AdminDashboard/>
      <Footer/>
    </>
  );
}
