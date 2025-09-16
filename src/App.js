import React, { useState } from "react";
import { smallSlabs, largeSlabs, fixedCharges, categories } from "./tariffs";

export default function App() {
  const [category, setCategory] = useState("Domestic");
  const [phase, setPhase] = useState("Single Phase");
  const [units, setUnits] = useState("");
  const [breakdown, setBreakdown] = useState([]);
  const [total, setTotal] = useState(null);

  const calculateCost = () => {
    let remaining = parseFloat(units);
    if (isNaN(remaining) || remaining <= 0) return;

    let cost = 0;
    const details = [];

    // Choose slab set
    const slabs = remaining <= 500 ? smallSlabs : largeSlabs;

    for (let slab of slabs) {
      if (remaining <= 0) break;
      const slabUnits = Math.min(remaining, slab.upto - slab.from + 1);
      const slabCost = slabUnits * slab.rate;
      details.push({
        range: `${slab.from}-${slab.upto}`,
        units: slabUnits,
        rate: slab.rate,
        cost: slabCost
      });
      cost += slabCost;
      remaining -= slabUnits;
    }

    // Add fixed charge
    const fixed = fixedCharges[category][phase] || 0;
    cost += fixed;

    setBreakdown(details);
    setTotal(cost);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4 shadow-sm">
        ⚡ TNEB Cost Calculator
      </h1>

      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 rounded border"
          >
            {categories.map((c, i) => (
              <option key={i} disabled={c !== "Domestic"}>
                {c} {c !== "Domestic" ? "(Coming Soon)" : ""}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Phase</label>
          <select
            value={phase}
            onChange={(e) => setPhase(e.target.value)}
            className="w-full p-2 rounded border"
          >
            <option>Single Phase</option>
            <option>Three Phase</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Units Consumed</label>
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            placeholder="Enter units"
            className="w-full p-2 rounded border"
          />
        </div>

        <button
          onClick={calculateCost}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg shadow-md transition"
        >
          Calculate
        </button>
      </div>

      {total !== null && (
        <div className="mt-6 w-full max-w-md bg-white rounded-2xl shadow-lg p-4">
          <h2 className="text-xl font-semibold text-indigo-700 mb-2">Breakdown</h2>
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-indigo-50">
                <th className="border p-1">Range</th>
                <th className="border p-1">Units</th>
                <th className="border p-1">Rate ₹</th>
                <th className="border p-1">Cost ₹</th>
              </tr>
            </thead>
            <tbody>
              {breakdown.map((row, i) => (
                <tr key={i}>
                  <td className="border p-1 text-center">{row.range}</td>
                  <td className="border p-1 text-center">{row.units}</td>
                  <td className="border p-1 text-center">{row.rate}</td>
                  <td className="border p-1 text-center">{row.cost.toFixed(2)}</td>
                </tr>
              ))}
              <tr className="font-bold bg-indigo-50">
                <td colSpan="3" className="border p-1 text-right">Total</td>
                <td className="border p-1 text-center">₹{total.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">
            *Exact TNEB CC Charges calculation with slab split at 500 units.
          </p>
        </div>
      )}
<footer className="mt-8 p-4 w-full text-center bg-indigo-50 rounded-2xl shadow-inner">
  <p className="font-bold text-indigo-700 text-sm sm:text-base">
    🧑‍💻 Developed by <a 
        href="https://in.linkedin.com/in/karthigces?trk=public_post_feed-actor-name" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline hover:text-indigo-900"
      >
        Karthi Thangavel
      </a> &nbsp;|&nbsp; Built with ❤️ using <span className="italic">Vibe Coding</span> for public interest
  </p>
</footer>
    </div>
  );
}
