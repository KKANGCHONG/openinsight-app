// src/utils.js
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}
