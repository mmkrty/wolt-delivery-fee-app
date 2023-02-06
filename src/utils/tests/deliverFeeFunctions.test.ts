import {
  checkNoDeliveryFee,
  checkMaxDeliveryFee,
  smallCharge,
  distanceCharge,
  bulkCharge,
  applyRushRate,
} from "../deliverFeeFunctions";

it("checkNoDeliveryFee should return true if input value is greater than or equal to 100.", () => {
  expect(checkNoDeliveryFee(100)).toStrictEqual(true);
});

it("checkMaxDeliveryFee should return true if input is greater than or equal to 15.", () => {
  expect(checkMaxDeliveryFee(15)).toStrictEqual(true);
});

it("smallCharge should return the difference between the input value and 10 if input is less than 10.", () => {
  expect(smallCharge(8)).toStrictEqual(2);
});

it("smallCharge should return 0 input is equal to 10.", () => {
  expect(smallCharge(10)).toStrictEqual(0);
});

it("smallCharge should return 0 input is greater than 10.", () => {
  expect(smallCharge(13)).toStrictEqual(0);
});

it("distanceCharge should return the correct fee at 1000 meters (2).", () => {
  expect(distanceCharge(1000)).toStrictEqual(2);
});

it("distanceCharge should return the correct fee at 1001 meters (3).", () => {
  expect(distanceCharge(1001)).toStrictEqual(3);
});

it("bulkCharge should return 0 when input value is less than or equal to 4.", () => {
  expect(bulkCharge(4)).toStrictEqual(0);
});

it("bulkCharge should return the additonal charge (0.5 per 1 more item) when input value is greater than 4.", () => {
  expect(bulkCharge(5)).toStrictEqual(0.5);
});

it("bulkCharge should return the additonal charge (0.5 per 1 more item) plus bulk charge (1.2) when input value is greater than 12.", () => {
  expect(bulkCharge(15)).toStrictEqual(6.7);
});

it("applyRushRate should not apply the rate of 1.2 when input datetime is not rush hour", () => {
  expect(applyRushRate(new Date("2024-05-03T10:30Z"), 2)).toStrictEqual(2);
});

it("applyRushRate should apply the rate of 1.2 when input datetime is during rush hour", () => {
  expect(applyRushRate(new Date("2024-05-03T17:30Z"), 2)).toStrictEqual(2.4);
});
