import {
  checkNoDeliveryFee,
  checkMaxDeliveryFee,
  smallCharge,
  distanceCharge,
  bulkCharge,
  rushCharge,
} from "./deliverFeeFunctions";

import { deliverParameters } from "./deliverFeeParameters";

import { InputData } from "./model";

const { deliveryMax } = deliverParameters;

export const deliverFeeCalculator = (input: InputData): number => {
  const { cartFeeTotal, cartItemsTotal, deliverDistance, deliverTime } = input;

  let deliveryFee = 0;

  if (checkNoDeliveryFee(cartFeeTotal)) return deliveryFee;

  deliveryFee +=
    smallCharge(cartFeeTotal) +
    distanceCharge(deliverDistance) +
    bulkCharge(cartItemsTotal);

  if (checkMaxDeliveryFee(deliveryFee)) return deliveryFee;

  deliveryFee = rushCharge(deliverTime, deliveryFee);

  return checkMaxDeliveryFee(deliveryFee) ? deliveryMax : deliveryFee;
};
