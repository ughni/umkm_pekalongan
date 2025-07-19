"use client"

import { useState, useEffect } from 'react'; // <--- Add useState and useEffect here
import { useRouter } from 'next/navigation';
import { FiHome, FiShoppingCart, FiUsers, FiDollarSign, FiPieChart, FiSettings, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const router = useRouter();

  // Data dummy untuk contoh
  useEffect(() => {
    const dummyOrders = [
      { id: 1, customer: 'John Doe', amount: 150000, status: 'completed', date: '2023-05-15' },
      { id: 2, customer: 'Jane Smith', amount: 200000, status: 'processing', date: '2023-05-16' },
      { id: 3, customer: 'Robert Johnson', amount: 175000, status: 'pending', date: '2023-05-16' },
      { id: 4, customer: 'Emily Davis', amount: 225000, status: 'completed', date: '2023-05-17' },
      { id: 5, customer: 'Michael Wilson', amount: 125000, status: 'completed', date: '2023-05-18' },
    ];
    setOrders(dummyOrders);
  }, []);

  // Data untuk chart
  const salesData = [
    { name: 'Senin', sales: 1200000 },
    { name: 'Selasa', sales: 1900000 },
    { name: 'Rabu', sales: 1500000 },
    { name: 'Kamis', sales: 1800000 },
    { name: 'Jumat', sales: 2100000 },
    { name: 'Sabtu', sales: 2500000 },
    { name: 'Minggu', sales: 2200000 },
  ];

  const productData = [
    { name: 'Rendang', value: 35 },
    { name: 'Nasi Goreng', value: 25 },
    { name: 'Sate', value: 20 },
    { name: 'Soto', value: 15 },
    { name: 'Lainnya', value: 5 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A4DE6C'];

  const handleLogout = () => {
    // Logika logout
    router.push('/admin/login');
  };

  return (
    <div id='admin' className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64 bg-amber-800 text-white`}
      >
        <div className="p-4 flex items-center justify-between border-b border-amber-700">
          <h1 className="text-xl font-bold">Admin UMKM Pekalongan</h1>
          <button
            className="lg:hidden p-1 rounded-md hover:bg-amber-700"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX size={20} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-amber-700' : 'hover:bg-amber-700'} transition`}
              >
                <FiHome className="mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('orders')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'orders' ? 'bg-amber-700' : 'hover:bg-amber-700'} transition`}
              >
                <FiShoppingCart className="mr-3" />
                Pesanan
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('products')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'products' ? 'bg-amber-700' : 'hover:bg-amber-700'} transition`}
              >
                <FiDollarSign className="mr-3" />
                Produk
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('customers')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'customers' ? 'bg-amber-700' : 'hover:bg-amber-700'} transition`}
              >
                <FiUsers className="mr-3" />
                Pelanggan
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('reports')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'reports' ? 'bg-amber-700' : 'hover:bg-amber-700'} transition`}
              >
                <FiPieChart className="mr-3" />
                Laporan
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab('settings')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'settings' ? 'bg-amber-700' : 'hover:bg-amber-700'} transition`}
              >
                <FiSettings className="mr-3" />
                Pengaturan
              </button>
            </li>
          </ul>

          <button
            onClick={handleLogout}
            className="flex items-center w-full p-3 mt-6 rounded-lg hover:bg-amber-700 transition"
          >
            <FiLogOut className="mr-3" />
            Keluar
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm z-10">
          <div className="flex items-center justify-between p-4">
            <button
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setSidebarOpen(true)}
            >
              <FiMenu size={20} />
            </button>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold">
                    Pn
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {activeTab === 'dashboard' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h2>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 font-medium">Total Pendapatan</h3>
                  <p className="text-3xl font-bold text-amber-600">Rp 12,450,000</p>
                  <p className="text-green-500 text-sm mt-1">+12% dari minggu lalu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 font-medium">Total Pesanan</h3>
                  <p className="text-3xl font-bold text-amber-600">48</p>
                  <p className="text-green-500 text-sm mt-1">+5 dari minggu lalu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 font-medium">Pelanggan Baru</h3>
                  <p className="text-3xl font-bold text-amber-600">12</p>
                  <p className="text-green-500 text-sm mt-1">+3 dari minggu lalu</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-500 font-medium">Produk Terjual</h3>
                  <p className="text-3xl font-bold text-amber-600">156</p>
                  <p className="text-red-500 text-sm mt-1">-2 dari minggu lalu</p>
                </div>
              </div>

              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-800 font-medium mb-4">Penjualan Mingguan</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={salesData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sales" fill="#D97706" name="Penjualan (Rp)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-gray-800 font-medium mb-4">Distribusi Penjualan Produk</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={productData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        >
                          {productData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-gray-800 font-medium mb-4">Pesanan Terbaru</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pelanggan</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanggal</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jumlah</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Aksi</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">#{order.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rp {order.amount.toLocaleString('id-ID')}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.status === 'completed' ? 'bg-green-100 text-green-800' :
                              order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status === 'completed' ? 'Selesai' :
                               order.status === 'processing' ? 'Diproses' : 'Menunggu'}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button className="text-amber-600 hover:text-amber-900 mr-3">Detail</button>
                            <button className="text-red-600 hover:text-red-900">Hapus</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manajemen Pesanan</h2>
              {/* Konten manajemen pesanan */}
            </div>
          )}

          {activeTab === 'products' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manajemen Produk</h2>
              {/* Konten manajemen produk */}
            </div>
          )}

          {activeTab === 'customers' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Manajemen Pelanggan</h2>
              {/* Konten manajemen pelanggan */}
            </div>
          )}

          {activeTab === 'reports' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Laporan</h2>
              {/* Konten laporan */}
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Pengaturan</h2>
              {/* Konten pengaturan */}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}