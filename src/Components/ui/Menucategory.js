// components/MenuCategory.js
import Image from "next/image";
import Link from "next/link";

const MenuCategory = ({ category }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="bg-amber-700 text-white py-3 px-6">
        <h2 className="text-xl font-bold">{category.name}</h2>
      </div>

      <div className="p-6">
        <ul className="space-y-4">
          {category.items.map((item) => (
            <li key={item.id} className="border-b border-amber-100 pb-4 last:border-0">
              <div className="flex gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover" unoptimized={true} />
                  {item.isPopular && <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">Populer!</div>}
                </div>
                <div>
                  <h3 className="font-bold text-amber-900">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{item.description}</p>
                  <p className="text-amber-600 font-bold">Rp {item.price.toLocaleString("id-ID")}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Link href={`/menu/${category.id}`} className="mt-6 inline-block text-center w-full bg-amber-100 hover:bg-amber-200 text-amber-800 font-medium py-2 px-4 rounded-lg transition duration-300">
          Lihat Semua
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
