const generateCheckInNumber = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};
const generatePurchaseOrderNumber = () => {
  return Math.floor(1000000000 + Math.random() * 9000000000).toString();
};

module.exports = {
  generateCheckInNumber,
  generatePurchaseOrderNumber,
}