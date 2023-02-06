import { deliverFeeCalculator } from "../deliverFeeCalculator";

it("Should return 0 if total cart value is equal or greater than 100", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 100,
      cartItemsTotal: 4,
      deliverDistance: 1000,
      deliverTime: new Date("2024-05-03T10:30Z"),
    })
  ).toStrictEqual(0);
});

it("Should apply basic distance fee", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 10,
      cartItemsTotal: 4,
      deliverDistance: 1000,
      deliverTime: new Date("2024-05-03T10:30Z"),
    })
  ).toStrictEqual(2);
});

it("Should apply additional distance fee of 1 every 500 meters if delivery distance is greater than 1000", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 10,
      cartItemsTotal: 4,
      deliverDistance: 1500,
      deliverTime: new Date("2024-05-03T10:30Z"),
    })
  ).toStrictEqual(3);
});

it("Should apply additional surcharge if total cart value is less than 10", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 8,
      cartItemsTotal: 4,
      deliverDistance: 1000,
      deliverTime: new Date("2024-05-03T10:30Z"),
    })
  ).toStrictEqual(4);
});

it("Should apply items fee of 0.5 per 1 more item if total items is greater than 4", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 10,
      cartItemsTotal: 6,
      deliverDistance: 1000,
      deliverTime: new Date("2024-05-03T10:30Z"),
    })
  ).toStrictEqual(3);
});

it("Should apply bulk fee of 1.2 if total items is greater than 12", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 10,
      cartItemsTotal: 13,
      deliverDistance: 1000,
      deliverTime: new Date("2024-05-03T10:30Z"),
    })
  ).toStrictEqual(7.7);
});

it("Should apply rush rate if delivery time is during rush hour", () => {
  expect(
    deliverFeeCalculator({
      cartFeeTotal: 10,
      cartItemsTotal: 4,
      deliverDistance: 1000,
      deliverTime: new Date("2024-05-03T17:30Z"),
    })
  ).toStrictEqual(2.4);
});
