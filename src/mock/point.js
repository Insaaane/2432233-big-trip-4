import { getRandomInteger, getRandomDate, getRandomArrayElement } from '../utils.js';
import { TYPES } from '../const.js';

function generatePoint() {
  const date = getRandomDate();

  const offerIds = [];

  for (let i = 0; i < getRandomInteger(0, 5); i++) {
    offerIds.push(crypto.randomUUID());
  }

  return {
    id: crypto.randomUUID(),
    basePrice: getRandomInteger(500, 2500),
    dateFrom: date,
    dateTo: getRandomDate(date),
    destination: crypto.randomUUID(),
    isFavorite: !!getRandomInteger(0, 1),
    offers: offerIds,
    type: getRandomArrayElement(TYPES)
  };
}

export { generatePoint };
