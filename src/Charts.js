import React from "react";
import { Chart } from "react-chartjs-2";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title
);

function Charts() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <Doughnut
              data={{
                labels: ["Red", "Blue", "Yellow"],
                datasets: [
                  {
                    label: "My First Dataset",
                    data: [300, 50, 100],
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(54, 162, 235)",
                      "rgb(255, 205, 86)",
                    ],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </div>
          <div className="col-lg-8">
            <Line
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  title: {
                    display: true,
                    text: "Chart.js Line Chart",
                  },
                },
              }}
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                ],
                datasets: [
                  {
                    label: "My First Dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
                    tension: 0.1,
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
