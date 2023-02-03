export interface InputData {
  cartFeeTotal: number;
  cartItemsTotal: number;
  deliverDistance: number;
  deliverTime: Date;
}

export interface Errors {
  [key: string]: string;
}

export interface TimePeriod {
  day: number;
  startHour: number;
  endHour: number;
}

export interface parameters {
  smallFee: number;
  baseDeliveryDistance: number;
  baseDeliveryFee: number;
  additionalDeliveryDistance: number;
  additionalDeliveryFee: number;
  itemsFeeThreshold: number;
  bulkFeeThreshold: number;
  itemsFee: number;
  bulkFee: number;
  rushHourPeriod: TimePeriod;
  rushHourRate: number;
  noFeeThreshold: number;
  deliveryFeeMax: number;
}
