// app/menu/page.js
import MenuCategory from "@/Components/ui/Menucategory";
import { menuCategories } from "@/data/menuData";

export default function Menu() {
  return (
    <main className="bg-amber-50 min-h-screen">
      {/* Hero Section Menu */}
      <section className="relative bg-amber-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Menu Makanan Khas</h1>
          <p className="text-xl max-w-2xl mx-auto">Nikmati kelezatan autentik dengan resep turun-temurun dari berbagai daerah Indonesia</p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-amber-50 rounded-t-[40px]"></div>
      </section>

      {/* Daftar Kategori Menu */}
      <section className="container mx-auto px-4 py-16 -mt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuCategories.map((category) => (
            <MenuCategory key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Banner Promo */}
      <section className="bg-amber-100 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-800 mb-4">Promo Spesial Hari Ini!</h2>
          <p className="text-lg text-amber-700 mb-6">Pesan 2 menu andalan kami dapatkan gratis 1 es teh manis</p>
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300">Pesan Sekarang</button>
        </div>
      </section>
    </main>
  );
}
