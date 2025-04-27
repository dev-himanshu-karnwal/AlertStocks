import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";

type IndexChartProps = {
  index: string;
};

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function IndexChart({ index }: IndexChartProps) {
  const [data, setData] = useState<{
    labels: string[];
    datasets: {
      label: string;
      data: string[];
      fill: boolean;
      borderColor: string;
      tension: number;
      pointRadius: number;
      pointHoverRadius: number;
      pointBackgroundColor: string;
    }[];
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function fetchData() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `http://localhost:5000/stocks/day-chart?symbol=${index}`
          );

          const data = await res.json();

          if (!data) {
            setData(null);
            return;
          }

          const labels = data.map((item: { t: string }) => {
            const date = new Date(item.t);
            return date.toLocaleTimeString();
          });

          const prices = data.map((item: { c: string }) => item.c);

          setData({
            labels: labels,
            datasets: [
              {
                label: `${index} Stock Price`,
                data: prices,
                fill: false,
                borderColor: "rgba(75, 192, 192, 1)",
                tension: 0.1,
                pointRadius: 3,
                pointHoverRadius: 6,
                pointBackgroundColor: "rgba(75, 192, 192, 1)",
              },
            ],
          });
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

  if (isLoading) return <h3>loading...</h3>;

  if (!data) return <h3>Too many requests for Graphical Representation</h3>;

  return (
    <Line
      data={data}
      options={{
        responsive: true,
        plugins: {
          tooltip: {
            callbacks: {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              label: function (tooltipItem: any) {
                return `$${tooltipItem.raw.toFixed(2)}`; // Show prices with two decimals
              },
            },
          },
        },
        interaction: {
          mode: "index",
          intersect: false,
        },
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxRotation: 0,
              minRotation: 0,
            },
          },
        },
      }}
    />
  );
}
