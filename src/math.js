export const getRandomInRange = (min = 0, max = 70) => {
  return Math.floor(min + Math.random() * (max - min + 1)) };
