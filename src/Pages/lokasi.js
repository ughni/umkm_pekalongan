"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Qr from "../../public/Images/wa/qr.jpg"

export default function LokasiKontak() {
  // Data kontak yang bisa diubah dari satu tempat
  const contactData = {
    address: "Kecapatan Kajen, Kabupaten Pekalongan, Jawa Tengah",
    phone: "+62 858-6909-0748",
    email: "faan8428@gmail.com",
    businessHours: "Senin-Minggu, 08:00 - 20:00 WIB",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63356.900009259334!2d109.52291273108253!3d-7.032045242666694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fe01fab873f61%3A0xc109484cee38731e!2sKajen%2C%20Kec.%20Kajen%2C%20Kabupaten%20Pekalongan%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1752546070825!5m2!1sid!2sid"
  };

  return (
    <main id="lokasi" className="min-h-screen bg-gradient-to-br pt-5 from-amber-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-amber-800 mb-4">Hubungi Kami</h1>
        <p className="text-lg text-amber-600 max-w-2xl mx-auto">
          Kunjungi lokasi kami atau hubungi melalui berbagai saluran yang tersedia
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Lokasi Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-full">
                <FaMapMarkerAlt className="text-amber-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Lokasi UMKM Kami</h2>
            </div>
            
            <p className="text-gray-600 mb-6">{contactData.address}</p>
            
            <div className="relative h-80 rounded-xl overflow-hidden shadow-md border border-gray-200">
              <iframe
                src={contactData.mapEmbedUrl}
                width="100%"
                height="100%"
                className="absolute inset-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(contactData.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition duration-300 shadow-md"
            >
              Buka di Google Maps
            </a>
          </div>
        </motion.div>

        {/* Kontak Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-amber-100 rounded-full">
                <FaPhoneAlt className="text-amber-600 text-2xl" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Informasi Kontak</h2>
            </div>

            {/* Kontak Cards */}
            <div className="space-y-6">
              {/* Jam Operasional */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="p-2 bg-amber-200 rounded-full">
                  <FaClock className="text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Jam Operasional</h3>
                  <p className="text-gray-600">{contactData.businessHours}</p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="p-2 bg-amber-200 rounded-full">
                  <FaPhoneAlt className="text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Telepon/WhatsApp</h3>
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="text-gray-600 hover:text-amber-600 block"
                  >
                    {contactData.phone}
                  </a>
                  <a
                    href={`https://wa.me/${contactData.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-green-600 hover:text-green-700"
                  >
                    <FaWhatsapp className="text-lg" />
                    Chat via WhatsApp
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="p-2 bg-amber-200 rounded-full">
                  <FaEnvelope className="text-amber-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-gray-600 hover:text-amber-600"
                  >
                    {contactData.email}
                  </a>
                </div>
              </div>

              {/* QR Code WhatsApp (Opsional) */}
              <div className="p-4 bg-amber-50 rounded-lg text-center">
                <h3 className="font-semibold text-gray-800 mb-3">Scan QR Code untuk Chat</h3>
                <div className="inline-block p-2 bg-white rounded-lg shadow">
                  <Image
                    src={Qr}
                    alt="WhatsApp QR Code"
                    width={150}
                    height={150}
                    className="rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </main>
  );
}