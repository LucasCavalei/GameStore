import superMario from '../../assets/super-mario-odyssey.png';
import callofDutyWarfare from '../../assets/call-of-duty-infinite-warfare.png';
import theWitcher from '../../assets/the-witcher-iii-wild-hunt.png';
import callOfDutyiii from '../../assets/call-of-duty-wwii.png';
import mortalKombat from '../../assets/mortal-kombat-xl.png';
import shardsDarkness from '../../assets/shards-of-darkness.png';
import terraMedia from '../../assets/terra-media-sombras-de-mordor.png';
import fifa18 from '../../assets/fifa-18.png';
import horizonZero from '../../assets/horizon-zero-dawn.png';

const initialState = {
  products: [
    {
      id: 1,
      name: 'Super Mario Odyssey',
      price: 197.88,
      image: superMario,
    },
    {
      id: 2,
      name: 'Call Of Duty Infinite Warfare',
      price: 49.99,
      image: callofDutyWarfare,
    },
    {
      id: 3,
      name: 'The Witcher III Wild Hunt',
      price: 119.5,
      image: theWitcher,
    },
    {
      id: 4,
      name: 'Call Of Duty WWII',
      price: 249.99,
      image: callOfDutyiii,
    },
    {
      id: 5,
      name: 'Mortal Kombat XL',
      price: 69.99,
      image: mortalKombat,
    },
    {
      id: 6,
      name: 'Shards of Darkness',
      price: 71.94,
      image: shardsDarkness,
    },
    {
      id: 7,
      name: 'Terra Média: Sombras de Mordor',
      price: 79.99,
      image: terraMedia,
    },
    {
      id: 8,
      name: 'FIFA 18',
      price: 195.39,
      image: fifa18,
    },
    {
      id: 9,
      name: 'Horizon Zero Dawn',
      price: 115.8,
      image: horizonZero,
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
