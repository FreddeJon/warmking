const firstWord = ["Super", "Budget", "Hero", "King", "Great"];
const secondWord = ["Edition", "Health", "NoFog", "Heater"];

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const nearestThousand = (num) => {
  return Math.round(num / 1000) * 1000;
};

const getData = () => {
  const arr = [];
  for (let i = 0; i < 100; i++) {
    let newPrice = nearestThousand(getRandom(4000, 30000));
    let installationPrice = nearestThousand(getRandom(4000, 30000));
    const newProd = {
      id: i,
      rating: getRandom(1, 5),
      price: newPrice,
      installationCost: installationPrice,
      totalCost: newPrice + installationPrice,
      name:
        firstWord[getRandom(0, firstWord.length - 1)] +
        " " +
        secondWord[getRandom(0, secondWord.length - 1)],
    };

    arr.push(newProd);
  }
  return arr;
};

export { getData };
