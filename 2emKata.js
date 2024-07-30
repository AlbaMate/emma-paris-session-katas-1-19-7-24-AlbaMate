//Écrivez une fonction qui prend une chaîne de caractères en argument et retourne la chaîne inversée.

function inverseString(str) {
  let inverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    inverse += str[i];
  }
  return inverse;
}

console.log(inverseString("hello"));
console.log(inverseString("world"));
