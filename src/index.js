function isStringEqualsPizza(str) {
  return str.toLowerCase() === "pizza";
}

function isStringEqualsCake(str) {
  return str.toLowerCase() === "cake";
}

module.exports = {
  isStringEqualsPizza,
  isStringEqualsCake,
};
