export const capitalize = text => {
  const arr = text.split(" ");
  let capitalized = "";
  for (let word of arr) {
    capitalized += word.charAt(0).toUpperCase() + word.slice(1, word.length) + " ";
  }
  return capitalized.trim();
};
