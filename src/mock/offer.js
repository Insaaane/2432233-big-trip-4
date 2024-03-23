import { getRandomInteger, getRandomArrayElement } from '../utils.js';
import { OFFERS } from '../const.js';

function generateOffer() {
  return {
    id: crypto.randomUUID(),
    title: getRandomArrayElement(OFFERS),
    price: getRandomInteger(100, 500)
  };
}

export { generateOffer };
