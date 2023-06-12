import dateStringFormat from '@/utils/dateStringFormat';
import type { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts';

interface CandleChartProps {
  data: [string, number, number, number, number, number, number][];
}

export default function CandleChart({ data }: CandleChartProps) {
  const options: ApexOptions = {
    chart: {
      type: 'candlestick',
      height: 350,
      events: {
        scrolled: function (chartContext, { xaxis }) {
          console.log(xaxis);
        },
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (value) {
          return value;
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    annotations: {
      xaxis: [
        {
          x: dateStringFormat(data[data.length - 3][0]),
          borderColor: '#00E396',
          label: {
            borderColor: '#00E396',
            style: {
              fontSize: '12px',
              color: '#fff',
              background: '#00E396',
            },
            orientation: 'horizontal',
            offsetY: 7,
            text: '예측',
          },
        },
      ],
    },
  };

  const series = [
    {
      data: data.map((d) => {
        return {
          x: dateStringFormat(d[0]),
          y: [d[1], d[2], d[3], d[4]],
        };
      }),
    },
  ];

  return (
    <div>
      <ApexCharts type="candlestick" series={series} options={options} />
    </div>
  );
}
