export const generateRandomGraph = (bars: number[][]) => {
  return bars.map((month) =>
    month.map(() => Math.floor(Math.random() * 70) + 10),
  );
};

export const generateRandomRating = () => {
  return Number((Math.random() * 1 + 4).toFixed(1));
};
