// --------------  NO 3 -------------- 
console.log("NO 3");
const dataNumbers = [9, 4, 7, 7, 4, 3, 2, 2, 8];
let arraynumber = [];
console.log("Sebelum diurutkan : ", dataNumbers);

const getAngkaTerbesarKedua = (dataNumbers) => {
  // Mengurutkan dari yang terbesar
  const sortedNumbers = dataNumbers.sort((a, b) => {
    return b - a;
  });

  sortedNumbers.forEach((dataNumbers) => {
    arraynumber.push(dataNumbers);
  });
  console.log("Setelah diurutkan : ", arraynumber);
  console.log("Angka terbesar kedua : ", sortedNumbers[1]);
};

getAngkaTerbesarKedua(dataNumbers);