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
    const penulisTerjual = {};
    let penulisTerbanyak = '';
    let totalTerbanyak = 0;
    
    
    for (const produk of dataPenjualan) {
        const { penulis, totalTerjual, hargaBeli, hargaJual, sisaStok, namaProduk } = produk;
        
        
        infoPenjualan.totalModal += hargaBeli * (totalTerjual + sisaStok);
        infoPenjualan.totalKeuntungan += (hargaJual - hargaBeli) * totalTerjual;
        
        if (totalTerjual > infoPenjualan.produkBukuTerlaris.totalTerjual) {
            infoPenjualan.produkBukuTerlaris = {
                namaProduk,
                totalTerjual,
            };
        }
        
        if (penulisTerjual[penulis]) {
            penulisTerjual[penulis] += totalTerjual;
        } else {
            penulisTerjual[penulis] = totalTerjual;
        }
    }
  
  for (const penulis in penulisTerjual) {
      if (penulisTerjual[penulis] > totalTerbanyak) {
          penulisTerbanyak = penulis;
          totalTerbanyak = penulisTerjual[penulis];
        }
    }
    
    infoPenjualan.penulisTerlaris = penulisTerbanyak;
    
    infoPenjualan.persentaseKeuntungan = `${((infoPenjualan.totalKeuntungan / infoPenjualan.totalModal) * 100).toFixed(2)}%`;
    return infoPenjualan; 
}

const hasilInfoPenjualan = getInfoPenjualan(dataPenjualanNovel);

const formatTotalKeuntungan = `Rp.${hasilInfoPenjualan.totalKeuntungan.toLocaleString("id-ID")}`;
const formatTotalModal = `Rp.${hasilInfoPenjualan.totalModal.toLocaleString("id-ID")}`;

console.log('Total Keuntungan:', formatTotalKeuntungan);
console.log('Total Modal:', formatTotalModal);
console.log('Persentase Keuntungan:', hasilInfoPenjualan.persentaseKeuntungan);
console.log('Buku terlaris:', hasilInfoPenjualan.produkBukuTerlaris.namaProduk);
console.log('Penulis terlaris:', hasilInfoPenjualan.penulisTerlaris);