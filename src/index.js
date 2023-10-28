module.exports = function towlSort (matrix) {
    return arguments.length ? matrix.map((el, index) => index % 2 ? el.reverse() : el).flat() : [];
  }

  