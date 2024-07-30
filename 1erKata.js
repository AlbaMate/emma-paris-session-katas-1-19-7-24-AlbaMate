//Écrire une fonction qui prend un tableau d'entiers et retourne la somme de tous les éléments.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([-1, -2, -3, -4]));
