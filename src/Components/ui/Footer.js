"use client";
import { FaFacebook, FaInstagram, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../public/Images/Logo.png"

export default function Footer() {
  // Data kontak yang sudah disesuaikan
  const contactData = {
    address: "Kecamatan Kajen, Kabupaten Pekalongan, Jawa Tengah",
    phone: "+62 858-6909-0748",
    email: "faan8428@gmail.com",
    whatsapp: "+6285869090748", // Diperbaiki nomor WhatsApp
    businessHours: "Senin - Minggu, 08:00 - 20:00 WIB"
  };

  const socialMedia = [
    { icon: <FaFacebook />, url: "https://facebook.com/umkmkajen", name: "Facebook" },
    { icon: <FaInstagram />, url: "https://instagram.com/umkmkajen", name: "Instagram" },
    { icon: <FaTiktok />, url: "https://tiktok.com/@umkmkajen", name: "TikTok" }
  ];

  const quickLinks = [
    { name: "Beranda", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Tentang Kami", path: "/tentang" },
    { name: "Lokasi", path: "/lokasi" },
    { name: "Galeri", path: "/galeri" }
  ];

  return (
    <footer className="bg-amber-900 text-amber-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Logo dan Deskripsi */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src={icon} 
                alt="UMKM Kajen Pekalongan" 
                width={100} 
                height={100}
                className="rounded-full"
              />
              <span className="text-xl font-bold">UMKM Kajen Pekalongan</span>
            </div>
            <p className="text-amber-200">
              Menyajikan makanan khas Pekalongan dengan cita rasa autentik warisan leluhur.
            </p>
            <div className="flex gap-4 mt-4">
              {socialMedia.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-200 hover:text-white text-xl transition"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link Cepat */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-amber-700 pb-2">Navigasi</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path} 
                    className="text-amber-200 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-amber-500 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak Kami */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-amber-700 pb-2">Hubungi Kami</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-amber-300 flex-shrink-0" />
                <span>{contactData.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-amber-300 flex-shrink-0" />
                <a 
                  href={`tel:${contactData.phone.replace(/[^0-9+]/g, '')}`} 
                  className="hover:text-white hover:underline"
                >
                  {contactData.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-amber-300 flex-shrink-0" />
                <a 
                  href={`https://wa.me/${contactData.whatsapp.replace(/[^0-9]/g, '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp: {contactData.whatsapp}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-300 flex-shrink-0" />
                <a 
                  href={`mailto:${contactData.email}`} 
                  className="hover:text-white hover:underline break-all"
                >
                  {contactData.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaClock className="mt-1 text-amber-300 flex-shrink-0" />
                <span>{contactData.businessHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-amber-300 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} UMKM Kajen Pekalongan. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link 
              href="/kebijakan-privasi" 
              className="text-amber-300 hover:text-white hover:underline"
            >
              Kebijakan Privasi
            </Link>
            <Link 
              href="/syarat-ketentuan" 
              className="text-amber-300 hover:text-white hover:underline"
            >
              Syarat & Ketentuan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}