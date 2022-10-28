export const units = {
  SLICE: 'SLICE',
  GRAMS: 'GRAMS',
  ITEM: 'ITEM',
  HALF_GRINDSTONE: 'HALF_GRINDSTONE',
};

export const states = {
  INITIAL: 'INITIAL',
  LOADING_RESULTS: 'LOADING_RESULTS',
  DISPLAY_RESULTS: 'DISPLAY_RESULTS',
};

// initial time for loading spin
export const LOADING_TIME = 5;

//calories
export const ADULT_KCAL = 360;
export const CHILD_KCAL = 180;

// base numbers
export const NACHOS_CHIPS = {
  id: 'nachos',
  portions: { min: 215, max: 235 },
  unit: units.GRAMS,
  kcal: 780,
};


export const food = [
  // CLASSICS
  {
    type: 'base',
    id: 'minced meat',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: false,
    kcal: 100,
  },
  {
    type: 'base',
    id: 'bacon',
    portions: 8,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 44,
  },
  {
    type: 'base',
    id: 'chorizo',
    portions: 8,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 70,
  },
  {
    type: 'base',
    id: 'carnitas',
    portions: 5,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 185,
  },
  {
    type: 'base',
    id: 'carne asada',
    portions: 5,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 270,
  },
  {
    type: 'base',
    id: 'chicken',
    portions: 6,
    unit: units.SLICE,
    isVegeFriendly: false,
    kcal: 160,
  },
  {
    type: 'base',
    id: 'chili',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: false,
    kcal: 230,
  },
  {
    type: 'base',
    id: 'queso',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 170,
  },
  // EXTRAS
  {
    type: 'extra',
    id: 'pico de gallo',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 25,
  },
  {
    type: 'extra',
    id: 'guacamole',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 45,
  },
  {
    type: 'extra',
    id: 'sour cream',
    portions: 20,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 120,
  },
  {
    type: 'extra',
    id: 'lettuce',
    portions: 2,
    unit: units.ITEM,
    isVegeFriendly: true,
    kcal: 3,
  },

  {
    type: 'extra',
    id: 'lime',
    portions: 4,
    unit: units.SLICE,
    isVegeFriendly: true,
    kcal: 3,
  },

  {
    type: 'extra',
    id: 'jalapenos',
    portions: 10,
    unit: units.SLICE,
    isVegeFriendly: true,
    kcal: 8,
  },

  {
    type: 'extra',
    id: 'grilled corn',
    portions: 100,
    unit: units.GRAMS,
    isVegeFriendly: true,
    kcal: 50,
  },
];
