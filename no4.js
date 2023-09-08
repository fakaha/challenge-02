// --------------  NO 4 -------------- 
console.log("NO 4");

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const getTotalPenjualan = (dataPenjualanPakAldi) => {
  if (typeof dataPenjualanPakAldi === "object") {
    let totalPenjualan = 0;

    dataPenjualanPakAldi.forEach((data) => {
      totalPenjualan += data.totalTerjual;
    });

    return totalPenjualan;
  } else {
    return 'Error: Tipe data parameter harus berupa object';
  }
};

console.log("Total seluruh sepatu terjual : ", getTotalPenjualan(dataPenjualanPakAldi));