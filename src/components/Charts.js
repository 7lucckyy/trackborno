
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
    labels: ['Maiduguri', 'Askira/Uba', 'Abadam', 'Ngala', 'Bayo', 'Gubio', 'Kala/Balge', 'Biu', 'Guzamala', 'Mafa', 'Chibok', 'Kaga', 'Konduga', 'Damboa', 'Kukawa', 'Bama', 'Gwoza', 'Magumeri', 'Jere', 'Hawul', 'Marte', 'Dikwa', 'Kwaya Kusar', 'Mobbar', 'Shani', 'Monguno', 'Nganzai'],
    datasets: [{
      label: "Total Number of Projects",
      data: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66],
      fill:false,
      backgroundColor: "#93a5be"//"#8965e0"//"#4c5680"
    },{
      label: "Monitored Projects",
      data: [45, 26, 32, 75, 1, 22, 72, 72, 28, 65, 19, 6, 66, 49, 44, 87, 33, 47, 23, 98, 36, 84, 96, 42, 82, 51, 23, 66].map(number => number-10),
      fill:false,
      lineTension: 0.5,
      backgroundColor: "#4c5680"//"#8965e0"//"#4c5680"
    },
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
        position: "top",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          // pointStyleWidth: 10
        }
      },
      title: {
        display: true,
        fontSize: 18,
        position: "top",
        text: `Total Projects/LGA against Monitored Projects`
      },
    },
    pointBackgroundColor: "black"
	};

  return (
    <Bar data={data} options={options}/>
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
export const LineChart = (props) => {
  const { labels = [], series = [] } = props;

  const data = {
    labels: labels,
    datasets: series.map((serie, index) => {
      return {
        label: index === 0 ? "Completed Projects":"All Projects",
        data: serie,
        fill:false,
        barThickness: 5,
        lineTension: 0.5,
        // categoryPercentage: 0.7,
        // barPercentage: 0.5,
        backgroundColor: index === 0 ? "#1B998B":"#C96480"
      }
    })
  };
  const options = {
		responsive: true,
		plugins: {
      legend: {
        position: "top",
        labels: {
          pointStyle: "circle",
          usePointStyle: true,
          // pointStyleWidth: 10
        }
      },
    },
	};

  return (
    <Line data={data} options={options}/>
  );
};
