// --------------  NO 1 -------------- 
function changeWord(selectedText, changeText, text) {
    return text.replace(selectedText, changeText);
  }
  const kalimat1 = "Andini sangat mencintai kamu selamanya";
  const kalimat2 =
    "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu";
  
  console.log("NO 1");
  console.log("Kalimat1 awal = ", kalimat1);
  console.log("Kalimat2 awal = ", kalimat2);
  
  console.log("Kalimat1 akhir = ", changeWord("mencintai", "membenci", kalimat1));
  console.log("Kalimat2 akhir = ", changeWord("bromo", "semeru", kalimat2));