  function sumItems(array) {
  let result = 0;
  array.forEach((elm) => {
    if (Array.isArray(elm)) {
      result += sumItems(elm);
    } else {
      result += elm;
    }
  })
  return result;
}

module.exports = sumItems;