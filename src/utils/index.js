import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}

/**
 * function to generate random color in hex form
 */
export function getRandomColorHex() {
  var hex = "0123456789ABCDEF",
    color = "#";
  for (var i = 1; i <= 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Auto generate id
 * @param {*} suffix
 */
export const autoGenID = suffix => {
  return (
    Date.now().toString(36) +
    Math.random()
      .toString(36)
      .substr(2, 5) +
    suffix
  ).toUpperCase();
};
