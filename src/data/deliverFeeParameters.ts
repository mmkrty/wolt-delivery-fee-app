import { TimePeriod, parameters } from "../utils/models";

export const rushHourPeriod: TimePeriod = {
  day: 5,
  startHour: 15,
  endHour: 19,
};

export const deliverParameters: parameters = {
  smallFee: 10,
  baseDeliveryDistance: 1000,
  baseDeliveryFee: 2,
  additionalDeliveryDistance: 500,
  additionalDeliveryFee: 1,
  itemsFeeThreshold: 4,
  itemsFee: 0.5,
  bulkFeeThreshold: 12,
  bulkFee: 1.2,
  rushHourPeriod: rushHourPeriod,
  rushHourRate: 1.2,
  noFeeThreshold: 100,
  deliveryFeeMax: 15,
};
