"use client"
import Head from 'next/head';
import Image from 'next/image';
import gambarHero from "../../public/Images/hero/hero.jpg";
import gambarProses from "../../public/Images/hero/Pekalongan.png";
import gambarResep from "../../public/Images/hero/resep.png";
import gambarTim from "../../public/Images/Logo.png";

// Impor foto-foto anggota tim
import fotoSiti from "../../public/Images/hero/gambar1.jpeg";
import fotoBudi from "../../public/Images/hero/gambar2.png";
import fotoRina from "../../public/Images/hero/gambar3.png";
import fotoAgus from "../../public/Images/hero/gambar4.png";

const CeritaKami = () => {
  const anggotaTim = [
    { nama: "Siti Aisyah", posisi: "Pemilik & Juru Masak", foto: fotoSiti },
    { nama: "Budi Santoso", posisi: "Manajer Pemasaran", foto: fotoBudi },
    { nama: "Rina Wijaya", posisi: "Pengembangan Produk", foto: fotoRina },
    { nama: "Agus Setiawan", posisi: "Hubungan Pelanggan", foto: fotoAgus },
  ];

  return (
    <>
      <Head>
        <title>Cerita Kami - UMKM Kajen Pekalongan</title>
        <meta
          name="description"
          content="Kisah di balik UMKM Kajen Pekalongan, dedikasi kami untuk melestarikan kuliner khas Pekalongan."
        />
      </Head>

      <main className="bg-amber-50">
        {/* Hero Section */}
        <section className="relative h-[50vh] w-full overflow-hidden">
          <Image
            src={gambarHero}
            alt="Suasana Pekalongan"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent flex items-center justify-center">
            <div className="text-center px-6 mt-16">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                Cerita Kami
              </h1>
              <p className="text-amber-100 text-lg max-w-2xl mx-auto">
                Kisah perjalanan rasa dari warisan kuliner Pekalongan
              </p>
            </div>
          </div>
        </section>

        {/* Konten Utama */}
        <section className="container mx-auto px-4 py-16 max-w-4xl">
          {/* Judul */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-900 mb-2">
              Dari Dapur Nenek, Untuk Indonesia
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-amber-600 italic">
              Kisah Perjalanan Rasa UMKM Kajen Pekalongan
            </p>
          </div>

          {/* Awal Mula - Dengan Gambar Resep */}
          <div className="mb-16 bg-white p-8 rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-2/5">
                <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg border-4 border-amber-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-amber-800/20 z-10"></div>
                  <Image
                    src={gambarResep}
                    alt="Resep turun temurun"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-bold text-lg">Resep Warisan Keluarga</h3>
                    <p className="text-amber-200 text-sm">Tahun 1950-an</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Resep Asli
                  </div>
                </div>
              </div>
              <div className="md:w-3/5">
                <h3 className="text-2xl font-semibold text-orange-800 mb-6 flex items-center">
                  <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                  Awal Mula Cita Rasa
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Semuanya berawal dari sebuah buku resep tua milik nenek kami di jantung kota Kajen. Di dalamnya, tersimpan rahasia turun-temurun kelezatan masakan khas Pekalongan yang otentik.
                  </p>
                  <p>
                    Pada tahun 2020, dengan semangat dan tekad yang kuat, kami mendirikan <span className="font-medium text-amber-600">UMKM Kajen Pekalongan</span>. Bukan sekadar bisnis, ini adalah rumah bagi para perajin kuliner lokal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Misi Kami */}
          <div className="flex flex-col md:flex-row-reverse gap-8 mb-16 bg-orange-50 p-8 rounded-xl">
            <div className="md:w-2/5">
              <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={gambarProses}
                  alt="Proses pembuatan makanan"
                  layout="fill"
                  objectFit="cover"
                  className="brightness-90"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h3 className="text-2xl font-semibold text-orange-800 mb-6 flex items-center">
                <span className="w-3 h-3 bg-amber-500 rounded-full mr-3"></span>
                Misi Kami
              </h3>
              <p className="mb-4 text-gray-700">
                Misi kami sederhana: <span className="font-medium text-orange-700">Melestarikan dan Mempromosikan Kuliner Asli Pekalongan.</span> Kami bekerja sama langsung dengan para petani dan produsen lokal.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Memberdayakan UMKM lokal di Kajen dan sekitarnya</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Menjaga keaslian resep warisan leluhur</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-500 mr-2">•</span>
                  <span>Menghadirkan cita rasa Pekalongan ke meja makan Anda</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tim Kami */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-semibold text-orange-800 mb-6 text-center">
              Orang di Balik Layar
            </h3>
            <p className="mb-8 text-gray-700 max-w-2xl mx-auto text-center">
              Kami adalah keluarga kecil yang terdiri dari para juru masak, pengembang komunitas, dan pecinta kuliner yang bersemangat.
            </p>
            
            {/* Foto Tim Utama */}
            <div className="relative h-64 w-full rounded-xl overflow-hidden shadow-lg mb-10">
              <Image
                src={gambarTim}
                alt="Tim UMKM Kajen Pekalongan"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/70 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left text-white">
                <h4 className="text-xl font-bold">Tim UMKM Kajen Pekalongan</h4>
                <p>Bersama memajukan kuliner khas Pekalongan</p>
              </div>
            </div>
            
            {/* Grid Tim dengan Foto Profil */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {anggotaTim.map((anggota, index) => (
                <div 
                  key={index} 
                  className="text-center bg-amber-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg">
                    <Image
                      src={anggota.foto}
                      alt={anggota.nama}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-orange-900 mb-1">{anggota.nama}</h4>
                  <p className="text-amber-600 font-medium mb-3">{anggota.posisi}</p>
                  <div className="flex justify-center space-x-3">
                    <button className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center hover:bg-amber-300 transition-colors">
                      <span className="text-amber-700 font-bold">f</span>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center hover:bg-amber-300 transition-colors">
                      <span className="text-amber-700 font-bold">in</span>
                    </button>
                    <button className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center hover:bg-amber-300 transition-colors">
                      <span className="text-amber-700 font-bold">t</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <button
                onClick={() => (window.location.href = '/')}
                className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-md hover:shadow-lg inline-flex items-center"
              >
                Lihat Menu Kami
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CeritaKami;