import { faker } from '@faker-js/faker';
export const PRODUCTS = [
  {
    id: 1,
    name: 'Womens Clothing',
    image:
      'http://assets.myntassets.com/v1/images/style/properties/f3964f76c78edd85f4512d98b26d52e9_images.jpg',
    price: faker.number.int({ min: 25, max: 40 }),
    categoryId: 1,
  },
  {
    id: 2,
    name: 'Mens Clothing',
    image:
      'http://assets.myntassets.com/v1/images/style/properties/dce310e4c15223a6c964631190263284_images.jpg',
    price: faker.number.int({ min: 25, max: 40 }),
    categoryId: 2,
  },
  {
    id: 3,
    name: 'Accessories',
    image:
      'http://assets.myntassets.com/v1/images/style/properties/fc3c1b46906d5c148c45f532d0b3ffb5_images.jpg',
    price: faker.number.int({ min: 25, max: 40 }),
    categoryId: 3,
  },
  {
    id: 4,
    name: 'Shoes',
    image:
      'http://assets.myntassets.com/v1/images/style/properties/ef9685293a987f515492addd034006bf_images.jpg',
    price: faker.number.int({ min: 25, max: 40 }),
    categoryId: 4,
  },
];
export const OPTIONS = [
  {
    id: 1,
    name: 'Size',
    values: [
      { id: 1, optionId: 1, name: 'Small' },
      { id: 2, optionId: 1, name: 'Medium' },
      { id: 3, optionId: 1, name: 'Large' },
    ],
  },
  {
    id: 2,
    name: 'Color',
    values: [
      { id: 4, optionId: 2, name: faker.color.human() },
      { id: 5, optionId: 2, name: faker.color.human() },
      { id: 6, optionId: 2, name: faker.color.human() },
    ],
  },
];

export const PRODUCT_OPTIONS = {
  1: [1, 2],
  2: [1, 2],
  3: [1, 2],
  4: [1, 2],
};
