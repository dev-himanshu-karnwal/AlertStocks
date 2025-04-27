import { useEffect, useState } from "react";

type IndexStatsProps = {
  index: string;
};

type IndiceData = {
  T: string;
  v: number;
  vw: number;
  o: number;
  c: number;
  h: number;
  l: number;
  t: number;
  n: number;
};

export default function IndexStats({ index }: IndexStatsProps) {
  const [stats, setStats] = useState<IndiceData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `http://localhost:5000/stocks/quote?symbol=${index}`
          );

          const data = await res.json();
          setStats(data);
        } catch (error) {
          console.error("Error fetching stock data:", error);
        } finally {
          setIsLoading(false);
        }
      }

      fetchData();
    },
    [index]
  );

  return (
    <div className="w-100 bg-gray-800 rounded-lg shadow-lg p-6 space-y-6 fade-in">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-white">Market Snapshot</h2>
        {isLoading ? (
          <p className="text-gray-400 text-sm">Loading...</p>
        ) : !stats ? (
          <p className="text-gray-400 text-sm">No data available</p>
        ) : (
          <>
            <p className="text-gray-400 text-sm">
              {new Date(stats.t).toLocaleString()}{" "}
              {/* Updated with timestamp field */}
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {/* Current Price */}
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Current Price</span>
                <span className="text-lg font-bold text-blue-400">
                  ${stats.c.toFixed(2)}{" "}
                  {/* Using the first entry's closing price */}
                </span>
              </div>

              {/* Change */}
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Change</span>
                <span
                  className={`text-lg font-bold ${
                    stats.c - stats.o >= 0 ? "text-green-400" : "text-red-400"
                  }`} // Change based on current and open prices
                >
                  {(stats.c - stats.o).toFixed(2)} (
                  {(((stats.c - stats.o) / stats.o) * 100).toFixed(2)}%){" "}
                  {/* Percentage change */}
                </span>
              </div>

              {/* High */}
              <div className="flex flex-col items-center">
                <span className="text-gray-400">High</span>
                <span className="text-lg font-semibold text-white">
                  ${stats.h.toFixed(2)} {/* Highest price */}
                </span>
              </div>

              {/* Low */}
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Low</span>
                <span className="text-lg font-semibold text-white">
                  ${stats.l.toFixed(2)} {/* Lowest price */}
                </span>
              </div>

              {/* Open */}
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Open</span>
                <span className="text-lg font-semibold text-white">
                  ${stats.o.toFixed(2)} {/* Opening price */}
                </span>
              </div>

              {/* Previous Close */}
              <div className="flex flex-col items-center">
                <span className="text-gray-400">Prev Close</span>
                <span className="text-lg font-semibold text-white">
                  ${stats.o.toFixed(2)}{" "}
                  {/* Using the opening price of the first data */}
                </span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
