
import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
  BarElement,
	PointElement,
	LineElement,
  ArcElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
  BarElement,
  ArcElement,
	Title,
	Tooltip,
	Legend,
);

export const ProjectChart = () => {
  const data = {
    labels: ['mel', 'orf', 'col', 'wen', 'lux', 'bar','kex', 'dah', 'gar', 'ere', 'ped', 'alk','ife', 'gar', 'dal', 'kep', 'eft', 'pam','roc', 'hod', 'ket', 'tow', 'ere', 'zel', 'jud', 'kip', 'zel', 'dmb',],
    datasets: [{
      label: "No. of Projects",
      data: [76, 14, 97, 50, 42, 70, 20, 18, 7, 10, 60, 79, 42, 58, 36, 17, 43, 44, 90, 44, 43, 35, 77, 7, 96, 94, 70,54],
      fill:false,
      lineTension: 0.5,
      borderColor: "red"
    },
    {
      label: "No. of Completed Projects",
      data: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66],
      fill:false,
      lineTension: 0.5,
      borderColor: "blue"
    }
  ]
  };
  const options = {
    scales: {
      y: {
        min: 0,
        max: 100,
        grid: {display: false}
      },
      x: {
        grid: {display: false}
      }
    },
    // animations: {
    //   tension: {
    //     duration: 1000,
    //     easing: 'linear', //easeInOutBounce
    //     from: 1,
    //     to: 0,
    //     loop: true
    //   }
    // },
		responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        fontSize: 18,
        position: "top",
        text: `Total Projects/LGA`
      },
    },
    pointBackgroundColor: "black"
	};

  return (
    <Line data={data} options={options}/>
  );
};


export const CircleChart = (props) => {
  const { series = [], labels=[], colors=[] } = props;
  
  const data = {
    labels,
    datasets: [{
      data: series,
      backgroundColor: colors
    }],
  }
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
		},
	};

  return (
    <Doughnut data={data} options={options}/>
  );
};

export const BarChart = (props) => {
  const { labels = [], series = [], chartClassName = "ct-golden-section" } = props;

  const data = {
    labels: labels,
    datasets: series.map((serie, index) => {
      return {
        label: index === 0 ? "Completed Projects":"All Projects",
        data: serie,
        fill:false,
        barThickness: 5,
        // categoryPercentage: 0.7,
        // barPercentage: 0.5,
        backgroundColor: index === 0 ? "Blue":"Red"
      }
    })
  };
  const options = {
		responsive: true,
		plugins: {
			legend: {display: false, position: "top"},
			title: {display: false, text: `Sales Chart`},
		},
	};

  return (
    <Bar data={data} options={options}/>
  );
};
