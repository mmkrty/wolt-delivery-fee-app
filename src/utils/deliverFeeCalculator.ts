import {
  checkNoDeliveryFee,
  checkMaxDeliveryFee,
  smallCharge,
  distanceCharge,
  bulkCharge,
  applyRushRate,
} from "./deliverFeeFunctions";

import { deliverParameters } from "../data/deliverFeeParameters";

import { InputData } from "./models";

const { deliveryFeeMax } = deliverParameters;

export const deliverFeeCalculator = (input: InputData): number => {
  const { cartFeeTotal, cartItemsTotal, deliverDistance, deliverTime } = input;

  let deliveryFee = 0;

  if (cartFeeTotal === 0 || cartItemsTotal === 0) return deliveryFee;

  if (checkNoDeliveryFee(cartFeeTotal)) return deliveryFee;

  deliveryFee +=
    smallCharge(cartFeeTotal) +
    distanceCharge(deliverDistance) +
    bulkCharge(cartItemsTotal);

  if (checkMaxDeliveryFee(deliveryFee)) return deliveryFeeMax;

  deliveryFee = applyRushRate(deliverTime, deliveryFee);

  return checkMaxDeliveryFee(deliveryFee) ? deliveryFeeMax : deliveryFee;
};
