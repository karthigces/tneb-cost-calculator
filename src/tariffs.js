// Domestic LT‑IA slabs as per TNEB CC Charges logic

// Slabs for units ≤ 500
export const smallSlabs = [
  { from: 1, upto: 100, rate: 0 },
  { from: 101, upto: 200, rate: 2.35 },
  { from: 201, upto: 400, rate: 4.7 },
  { from: 401, upto: 500, rate: 6.3 }
];

// Slabs for units > 500
export const largeSlabs = [
  { from: 1, upto: 100, rate: 0 },
  { from: 101, upto: 400, rate: 4.7 },
  { from: 401, upto: 500, rate: 6.3 },
  { from: 501, upto: 600, rate: 8.4 },
  { from: 601, upto: 800, rate: 9.45 },
  { from: 801, upto: 1000, rate: 10.5 },
  { from: 1001, upto: 10000, rate: 11.55 }
];

export const fixedCharges = {
  Domestic: {
    "Single Phase": 0,
    "Three Phase": 0
  }
};

export const categories = ["Domestic", "Powerloom", "Commercial"];
