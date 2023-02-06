import { deliverParameters } from "../data/deliverFeeParameters";

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

const additionalDistanceFee = (distance: number): number => {
  let additionalUnit = Math.ceil(
    (distance - baseDeliveryDistance) / additionalDeliveryDistance
  );
  return additionalUnit * additionalDeliveryFee;
};

export const distanceCharge = (distance: number): number => {
  let distanceFee: number = baseDeliveryFee;

  if (distance <= baseDeliveryDistance) return distanceFee;

  return (distanceFee += additionalDistanceFee(distance));
};

const additionalItemsCharge = (totalItems: number): number => {
  if (totalItems <= itemsFeeThreshold) return 0;
  return (totalItems - itemsFeeThreshold) * itemsFee;
};

const bulkItemsCharge = (totalItems: number): number => {
  if (totalItems <= bulkFeeThreshold) return 0;
  return bulkFee;
};

export const bulkCharge = (totalItems: number): number => {
  const additionalItemsFee: number = additionalItemsCharge(totalItems);

  const bulkItemsFee: number = bulkItemsCharge(totalItems);

  return additionalItemsFee + bulkItemsFee;
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
  if (isRushHour(date)) return totalDeliveryFee * rushHourRate;

  return totalDeliveryFee;
};
