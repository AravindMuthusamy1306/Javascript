const celToFah = (celsius) =>
{
  let fahernhiet;
  fahernhiet = (celsius * 9/5) + 32;
  return fahernhiet;
};

let a = celToFah(4);
console.log(a,"fahernhiet");