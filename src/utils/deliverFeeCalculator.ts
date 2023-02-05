import {
  checkNoDeliveryFee,
  checkMaxDeliveryFee,
  smallCharge,
  distanceCharge,
  bulkCharge,
  applyRushRate,
} from "./deliverFeeFunctions";

import { deliverParameters } from "./deliverFeeParameters";

import { InputData } from "./models";

const { deliveryFeeMax } = deliverParameters;

export const deliverFeeCalculator = (input: InputData): number => {
  const { cartFeeTotal, cartItemsTotal, deliverDistance, deliverTime } = input;

  let deliveryFee = 0;

  if (cartFeeTotal === 0 || cartItemsTotal === 0) return deliveryFee;

  if (checkNoDeliveryFee(cartFeeTotal)) return deliveryFee;

  console.log("deliveryFee", deliveryFee);
  console.log("small charge", smallCharge(cartFeeTotal));
  console.log("distance charge", distanceCharge(cartFeeTotal));
  console.log("bulk charge", bulkCharge(cartFeeTotal));

  deliveryFee +=
    smallCharge(cartFeeTotal) +
    distanceCharge(deliverDistance) +
    bulkCharge(cartItemsTotal);

  console.log("deliveryFee", deliveryFee);

  if (checkMaxDeliveryFee(deliveryFee)) return deliveryFee;

  deliveryFee = applyRushRate(deliverTime, deliveryFee);

  return checkMaxDeliveryFee(deliveryFee) ? deliveryFeeMax : deliveryFee;
};
