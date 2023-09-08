// --------------  NO 2 -------------- 
console.log("NO 2");
const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 0) {
      return console.log("Genap");
    } else {
      return console.log("Ganjil");
    }
  } else if (typeof givenNumber !== "number") {
    if (
      typeof givenNumber === "string" ||
      typeof givenNumber === "object" ||
      Array.isArray(givenNumber)
    ) {
      return console.log("Error: invalid data type");
    } else if (!givenNumber) {
      return console.log("Error: Bro where is the the parameter?");
    } else {
      return console.log("Error: invalid data type");
    }
  }
};

checkTypeNumber(30); //Genap
checkTypeNumber(31); //Ganjil
checkTypeNumber("31"); //Error: invalid data type
checkTypeNumber({}); //Error: invalid data type
checkTypeNumber([]); //Error: invalid data type
checkTypeNumber(); //Error: Bro where is the parameter?