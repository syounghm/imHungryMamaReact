export const Brands = {
  1: getBrand("Vina AceCook", "Vietnam"),
  2: getBrand("New B.C.N.", "Vietnam"),
  3: getBrand("Chang", "Thailand"),
  4: getBrand("CTF", "Thailand"),
  5: getBrand("Asian Boy (E.B.Q)", "Vietnam"),
  6: getBrand("Elephant World", "Vietnam"),
  7: getBrand("Five Crabs", "Hong Kong"),
  8: getBrand("Megachef", "Thailand"),
  9: getBrand("Nestlé Vietnam", "Vietnam"),
  10: getBrand("Nguyen Gia", "Vietnam"),
  11: getBrand("Squid", "Thailand"),
  12: getBrand("Three Crabs", "Hong Kong"),
};
const getBrand = (name, country) => {
  return { name, country };
};

export default Brands;
