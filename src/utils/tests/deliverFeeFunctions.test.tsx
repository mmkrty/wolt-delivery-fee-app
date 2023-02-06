import {
  checkNoDeliveryFee,
  checkMaxDeliveryFee,
  smallCharge,
  distanceCharge,
  bulkCharge,
  applyRushRate,
} from "../deliverFeeFunctions";

it("checkNoDeliveryFee fee should be true if value is greater than or equal to 100.", () => {
  expect(checkNoDeliveryFee(100)).toStrictEqual(true);
});
