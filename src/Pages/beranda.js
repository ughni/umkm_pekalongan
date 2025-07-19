"use client";
import Image from "next/image";
import Link from "next/link";
import ImageHero from "../../public/Images/hero/Pekalongan.png"

const Hero = () => {
  // PATH GAMBAR DIPERBAIKI: Path tidak perlu menyertakan '/public' dan harus sesuai dengan nama folder 'Images' (huruf besar)
  const customers = [
    { id: 1, src: "/Images/hero/gambar1.jpeg" },
    { id: 2, src: "/Images/hero/gambar2.png" },
    { id: 3, src: "/Images/hero/gambar3.png" },
    { id: 4, src: "/Images/hero/gambar4.png" },
  ];


  return (
    <section  className="relative bg-amber-50">
      {/* Background pattern - DIPERBAIKI */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Images/food-pattern.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight">
              Nikmati Kelezatan <span className="text-amber-600">Makanan Khas</span> Asli Pekalongan
            </h1>

            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">Temukan cita rasa autentik dari Pekalongan. Produk UMKM kami dibuat dengan bahan pilihan dan resep turun-temurun.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/menu" className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                Lihat Menu
              </Link>
              <Link href="/tentang" className="px-8 py-3 border-2 border-amber-600 text-amber-600 hover:bg-amber-100 font-semibold rounded-lg transition duration-300">
                Cerita Kami
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-4">
                {customers.map((item) => (
                  <div key={item.id} className="w-12 h-12 rounded-full border-2 border-white overflow-hidden relative shadow-md">
                    <Image 
                      src={item.src} 
                      alt={`Pelanggan ${item.id}`} 
                      fill 
                      className="object-cover"
                      // Sediakan fallback jika gambar gagal dimuat
                      onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/48x48/eab308/ffffff?text=:)'; }}
                    />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <p className="font-semibold">5000+ Pelanggan Puas</p>
                <p className="flex items-center gap-1">
                  <span className="text-amber-500">★★★★★</span> 
                  (4.9/5.0)
                </p>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 w-full lg:h-[450px]">
              <Image 
                src={ImageHero} 
                alt="Makanan Khas Pekalongan" 
                fill 
                className="object-cover" 
                priority 
                // Fallback dikembalikan ke placeholder yang lebih stabil
                onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x450/333/ffffff?text=Nasi+Megono'; }}
              />
              <div className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-lg animate-pulse">
                <p className="font-bold text-amber-600">Nasi Megono</p>
                <p className="text-sm text-gray-600">Ikon Kuliner Pekalongan</p>
              </div>
            </div>

            <div className="hidden md:block absolute -left-10 -bottom-10 bg-white p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-gray-800">Buka Setiap Hari</p>
                  <p className="text-sm text-gray-600">08.00 - 20.00 WIB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
