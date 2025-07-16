// data/menuData.js
export const menuCategories = [
  {
    id: 1,
    name: "Makanan Berat",
    items: [
      {
        id: 101,
        name: "Rendang",
        description: "Daging sapi lembut dengan bumbu rempah khas Minang",
        price: 35000,
        image: "https://media.istockphoto.com/id/2161659672/photo/rendang-pork.webp?a=1&b=1&s=612x612&w=0&k=20&c=rLDiD5iR_ZynEspwhtaAu65v9bahAgA17fb7-VfclbA=",
        isPopular: true,
      },
      {
        id: 102,
        name: "Nasi Goreng Kampung",
        description: "Nasi goreng dengan bumbu tradisional dan telur dadar",
        price: 25000,
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFzaSUyMG1lZ29ub3xlbnwwfHwwfHx8MA%3D%3D",
      },
    ],
  },
  {
    id: 2,
    name: "Makanan Ringan",
    items: [
      {
        id: 201,
        name: "Nasi Megono",
        description: "Ketupat berisi ayam suwir dengan bumbu istimewa",
        price: 15000,
        image: "https://akcdn.detik.net.id/community/media/visual/2021/08/18/resep-nasi-megono-pekalongan-2_43.jpeg?w=700&q=90",
        isPopular: true,
      },
      {
        id: 202,
        name: "Serabi Solo",
        description: "Kue tradisional dengan santan dan gula merah",
        price: 12000,
        image: "https://media.istockphoto.com/id/2223153611/photo/traditional-indonesian-egg-pancake-serabi-telor.webp?a=1&b=1&s=612x612&w=0&k=20&c=zY9bEpggcCM6s4-RrZBB7IFlS4jlRrGvfEyUGOLVDvQ=",
      },
    ],
  },
  {
    id: 3,
    name: "Minuman",
    items: [
      {
        id: 301,
        name: "Es Teh Manis",
        description: "Teh tradisional dengan gula aren asli",
        price: 8000,
        image: "/images/menu/es-teh.jpg",
      },
      {
        id: 302,
        name: "Wedang Jahe",
        description: "Minuman jahe hangat dengan gula jawa",
        price: 10000,
        image: "/images/menu/wedang-jahe.jpg",
        isPopular: true,
      },
    ],
  },
];
