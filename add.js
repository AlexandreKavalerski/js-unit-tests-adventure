export default function add(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    throw new Error("Não é possível somar strings");
  }
  return a + b;
}
