// Domestic LT‑IA slabs as per the exact data provided
export const domesticSlabs = [
  { from: 1, upto: 100, units: 100, rate: 0 },
  { from: 101, upto: 400, units: 300, rate: 4.7 },
  { from: 401, upto: 500, units: 100, rate: 6.3 },
  { from: 501, upto: 600, units: 100, rate: 8.4 },
  { from: 601, upto: 800, units: 200, rate: 9.45 },
  { from: 801, upto: 1000, units: 200, rate: 10.5 },
  { from: 1001, upto: 10000, units: 9000, rate: 11.55 }
];

// Fixed charges placeholder (per kW/month)
export const fixedCharges = {
  Domestic: {
    "Single Phase": 0,
    "Three Phase": 0
  }
};

// Category options
export const categories = ["Domestic", "Powerloom", "Commercial"];
