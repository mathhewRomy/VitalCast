import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ECGComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('ecgGraph').getContext('2d');
    const ecgChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array(500).fill().map((_, i) => i),
        datasets: [
          {
            label: 'ECG Data',
            borderColor: 'blue',
            borderWidth: 1,
            fill: false,
            data: Array(500).fill(0),
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            max: 500,
            title: {
              display: true,
              text: 'Time (ms)', // X-axis label
            },
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Amplitude', // Y-axis label
            },
          },
        },
        animation: {
          duration: 0,
        },
      },
    });

    const simulateECGData = () => {
      const newDataPoint = Math.random() * 2 - 1;
      const newData = [...ecgChart.data.datasets[0].data];
      newData.push(newDataPoint);
      newData.shift();

      ecgChart.data.datasets[0].data = newData;
      ecgChart.update();
    };

    const dataGenerationInterval = setInterval(simulateECGData, 100);

    return () => clearInterval(dataGenerationInterval);
  }, []);

  const canvasHeight = 400 * 0.8;

  return (
    <div>
      <h1>ECG Graph</h1>
      <canvas id="ecgGraph" width="800" height={canvasHeight}></canvas>
    </div>
  );
};

export default ECGComponent;
