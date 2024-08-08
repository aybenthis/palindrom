function isPalindrom(kelime) {
  kelime = kelime.toLowerCase();
  let uzunluk = kelime.length;
  
  for (let i = 0; i < Math.floor(uzunluk / 2); i++) {
    if (kelime[i] !== kelime[uzunluk - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrom('Yapay'));
console.log(isPalindrom('Teğet'));
console.log(isPalindrom('Kasım'));
console.log(isPalindrom('Terminatör'));
