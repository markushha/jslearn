const str = prompt("", "");
const products = str.split(", ");
products.sort(compareNum);
console.log(products.join("; "));

function compareNum(a,b) {
    return a - b;
}