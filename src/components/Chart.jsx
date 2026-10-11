import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const topDataLabelsPlugin = {
  id: 'topDataLabels',
  afterDatasetsDraw(chart) {
    const { ctx } = chart;
    chart.data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((bar, index) => {
        const val = dataset.data[index];
        ctx.save();
        ctx.fillStyle = '#9CA3AF';
        ctx.font = '600 12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(val, bar.x, 22);
        ctx.restore();
      });
    });
  },
};

function EventChart() {
  const labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
  const chartData = [21, 38, 34, 56, 29, 48];

  const maxVal = Math.max(...chartData);
  const backgroundColors = chartData.map((val) =>
    val === maxVal ? '#FF5722' : '#FFC2AC'
  );

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: backgroundColors,
        borderWidth: 0,
        borderRadius: {
          topLeft: 8,
          topRight: 8,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barPercentage: 0.88,
        categoryPercentage: 0.88,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 36,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
          font: {
            size: 13,
          },
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
      <Bar
        data={data}
        options={options}
        plugins={[topDataLabelsPlugin]}
      />
    </div>
  );
}

export default EventChart;
