import { NACHOS_CHIPS } from '@/components/calculator/calculator.const';
import { getRandomBetween } from '~/utils/functions';

export function calculateResults({
  numberOfAdults,
  numberOfChildren,
  food,
  capacity,
}) {
  const quantity = numberOfAdults + (numberOfChildren / 2);

  return [
    ...food.map((aliment) => ({
      ...aliment,
      quantity: aliment.portions * quantity * capacity,
    })),
    {
      ...NACHOS_CHIPS,
      quantity: quantity * getRandomBetween(NACHOS_CHIPS.portions) * capacity,
    },
  ];
}

// exported for testing purposes
export function countKcal({ food, quantity }) {
  return food
    .filter((aliment) => aliment.kcal)
    .reduce(
      (previousValue, currentValue) =>
        previousValue + currentValue.kcal * quantity,
      0
    );
}
