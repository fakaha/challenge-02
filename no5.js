// -------------- NO 5 -------------- 
console.log('NO 5');
const dataPenjualanNovel = [
  {
      idProduct: 'BOOK002421', 
      namaProduk: 'Pulang - Pergi', 
      penulis: 'Tere Liye', 
      hargaBeli: 60000, 
      hargaJual: 86000,
      totalTerjual: 150, 
      sisaStok: 17,
  },
  {
      idProduct: 'BOOK002351', 
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye', 
      hargaBeli: 75000, 
      hargaJual: 103000,
      totalTerjual: 171, 
      sisaStok: 20,
  },
  {
      idProduct: 'BOOK002941', 
      namaProduk: 'Garis Waktu', 
      penulis: 'Fiersa Besari', 
      hargaBeli: 67000, 
      hargaJual: 99000, 
      totalTerjual: 213, 
      sisaStok: 5,
  },
  {
      idProduct: 'BOOK002941', 
      namaProduk: 'Laskar Pelangi', 
      penulis: 'Andrea Hirata', 
      hargaBeli: 55000, 
      hargaJual: 68000, 
      totalTerjual: 20, 
      sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // Validasi tipe data parameter
  if (!Array.isArray(dataPenjualan)) {
      throw new Error('Parameter harus berupa array');
  }

  // Membuat objek untuk menyimpan informasi penjualan
  const infoPenjualan = {
      totalKeuntungan: 0,
      totalModal: 0,
      produkBukuTerlaris: {
          namaProduk: '',
          totalTerjual: 0,
      },
      persentaseKeuntungan: 0,
      penulisTerlaris: '',
  };

  // Objek untuk menyimpan total penjualan per penulis
  const penulisTerjual = {};

  // Iterasi melalui dataPenjualan untuk menghitung informasi penjualan
  for (const produk of dataPenjualan) {
      const { penulis, totalTerjual, hargaBeli, hargaJual, sisaStok, namaProduk } = produk;
      
      // Menghitung total modal dengan benar (termasuk stok yang masih ada)
      infoPenjualan.totalModal += hargaBeli * (totalTerjual + sisaStok);
      infoPenjualan.totalKeuntungan += (hargaJual - hargaBeli) * totalTerjual;

      // Menyimpan informasi buku terlaris
      if (totalTerjual > infoPenjualan.produkBukuTerlaris.totalTerjual) {
          infoPenjualan.produkBukuTerlaris = {
              namaProduk,
              totalTerjual,
          };
      }

      // Menyimpan informasi penulis terlaris
      if (penulisTerjual[penulis]) {
          penulisTerjual[penulis] += totalTerjual;
      } else {
          penulisTerjual[penulis] = totalTerjual;
      }
  }

  // Mencari penulis dengan total penjualan tertinggi
  let penulisTerbanyak = '';
  let totalTerbanyak = 0;

  for (const penulis in penulisTerjual) {
      if (penulisTerjual[penulis] > totalTerbanyak) {
          penulisTerbanyak = penulis;
          totalTerbanyak = penulisTerjual[penulis];
      }
  }

  infoPenjualan.penulisTerlaris = penulisTerbanyak;

  // Menghitung persentase keuntungan
  infoPenjualan.persentaseKeuntungan = (infoPenjualan.totalKeuntungan / infoPenjualan.totalModal) * 100;

  return infoPenjualan; //return tipe data object
}

// Fungsi untuk mengubah angka ke format rupiah
function formatRupiah(angka) {
  const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
  });
  return formatter.format(angka);
}

// Menggunakan function getInfoPenjualan untuk mendapatkan informasi penjualan
const hasilInfoPenjualan = getInfoPenjualan(dataPenjualanNovel);

console.log('Total Keuntungan:', formatRupiah(hasilInfoPenjualan.totalKeuntungan));
console.log('Total Modal:', formatRupiah(hasilInfoPenjualan.totalModal));
console.log('Persentase Keuntungan:', hasilInfoPenjualan.persentaseKeuntungan.toFixed(2) + '%');
console.log('Buku terlaris:', hasilInfoPenjualan.produkBukuTerlaris.namaProduk);
console.log('Penulis terlaris:', hasilInfoPenjualan.penulisTerlaris);