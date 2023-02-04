import { deliverParameters } from "./deliverFeeParameters";

const {
  smallFee,
  baseDeliveryDistance,
  baseDeliveryFee,
  additionalDeliveryDistance,
  additionalDeliveryFee,
  itemsFeeThreshold,
  itemsFee,
  bulkFeeThreshold,
  bulkFee,
  rushHourPeriod,
  rushHourRate,
  noFeeThreshold,
  deliveryFeeMax,
} = deliverParameters;

export const checkNoDeliveryFee = (totalFee: number): boolean => {
  return totalFee >= noFeeThreshold;
};

export const checkMaxDeliveryFee = (totalDeliveryFee: number): boolean => {
  return totalDeliveryFee >= deliveryFeeMax;
};

export const smallCharge = (totalFee: number): number => {
  return totalFee < smallFee ? smallFee - totalFee : 0;
};

export const distanceCharge = (distance: number): number => {
  let distanceFee: number = 0;
  let additionalUnit: number = 0;

  if (distance < baseDeliveryDistance) {
    distanceFee = baseDeliveryFee;
  } else {
    additionalUnit =
      (distance - baseDeliveryDistance) / additionalDeliveryDistance;

    if (Number.isInteger(additionalUnit)) {
      distanceFee = baseDeliveryFee + additionalUnit * additionalDeliveryFee;
    } else {
      distanceFee =
        baseDeliveryFee + (additionalUnit + 1) * additionalDeliveryFee;
    }
  }
  return distanceFee;
};

export const bulkCharge = (totalItems: number): number => {
  let bulkCharge = 0;

  if (totalItems < itemsFeeThreshold) {
    return bulkCharge;
  } else {
    bulkCharge = (totalItems - itemsFeeThreshold) * itemsFee;
  }

  if (totalItems <= bulkFeeThreshold) {
    return bulkCharge;
  } else {
    return bulkCharge + (totalItems - bulkFeeThreshold) * bulkFee;
  }
};

const isRushHour = (date: Date) => {
  const day = date.getUTCDay();
  const hour = date.getUTCHours();
  if (
    day === rushHourPeriod.day &&
    hour >= rushHourPeriod.startHour &&
    hour <= rushHourPeriod.endHour
  )
    return true;

  return false;
};

export const applyRushRate = (date: Date, totalDeliveryFee: number): number => {
  // const day = date.getUTCDay();
  // const hour = date.getUTCHours();

  // if (
  //   day === rushHourPeriod.day &&
  //   hour >= rushHourPeriod.startHour &&
  //   hour <= rushHourPeriod.endHour
  // )
  //   return totalDeliveryFee * rushHourRate;

  if (isRushHour(date)) return totalDeliveryFee * rushHourRate;

  return totalDeliveryFee;
};
