const initialState = {
  products: [
    {
      id: 1,
      name: 'Super Mario Odyssey',
      price: 197.88,
      image: '../../assets/super-mario-odyssey.png',
    },
    {
      id: 2,
      name: 'Call Of Duty Infinite Warfare',
      price: 49.99,
      image: '../../assets/call-of-duty-infinite-warfare.png',
    },
    {
      id: 3,
      name: 'The Witcher III Wild Hunt',
      price: 119.5,
      image: '../../assets/the-witcher-iii-wild-hunt.png',
    },
    {
      id: 4,
      name: 'Call Of Duty WWII',
      price: 249.99,
      image: '../../assets/call-of-duty-wwii.png',
    },
    {
      id: 5,
      name: 'Mortal Kombat XL',
      price: 69.99,
      image: '../../assets/mortal-kombat-xl.png',
    },
    {
      id: 6,
      name: 'Shards of Darkness',
      price: 71.94,
      image: '../../assets/shards-of-darkness.png',
    },
    {
      id: 7,
      name: 'Terra Média: Sombras de Mordor',
      price: 79.99,
      image: '../../assets/terra-media-sombras-de-mordor.png',
    },
    {
      id: 8,
      name: 'FIFA 18',
      price: 195.39,
      image: '../../assets/fifa-18.png',
    },
    {
      id: 9,
      name: 'Horizon Zero Dawn',
      price: 115.8,
      image: '../../assets/horizon-zero-dawn.png',
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};
