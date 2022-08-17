import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const ReviewLineChart = () => {
  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: '총점',
          data: [4.5, 4, 5, 3.5, 3.5, 4],
        },
      ]}
      options={{
        chart: {
          height: '400px',
          width: '900px',
          type: 'line',
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        title: {
          text: '월별 총 별점',
          align: 'left',
          style: {
            fontSize: '20px',
          },
        },
        colors: ['#522772'],
        xaxis: {
          categories: ['2월', '3월', '4월', '5월', '6월', '7월'],
        },
        yaxis: {
          min: 0,
          max: 5,
        },
      }}
    />
  );
};

export default ReviewLineChart;
