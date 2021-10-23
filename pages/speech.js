// import Head from 'next/head'
// import Image from 'next/image'
import { Bar } from 'react-chartjs-2';

const Dictaphone = () => {
    const data = {
        labels: ['Ingresos', 'Gastos'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(75, 192, 192, 0.7)',
              'rgba(255, 99, 132, 0.7)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
      <div>
        <Bar data={data} options={options} />
        <div>Here we go</div>
        <p>"transcript"</p>
      </div>
    );
  };
  export default Dictaphone;
