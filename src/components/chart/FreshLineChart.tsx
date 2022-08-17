import React from 'react';
import styled from 'styled-components';
import ApexCharts from 'react-apexcharts';

const FreshLineChart = () => {
  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: '신선도',
          data: [4.5, 4, 5, 3.5, 3.5, 4],
        },
        {
          name: '맛',
          data: [4, 4, 4, 4, 4, 4],
        },
        {
          name: '배송상태',
          data: [5, 4, 3, 2, 2, 1],
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
          text: '주간 상세 별점',
          align: 'left',
          style: {
            fontSize: '20px',
            fontWeight: 500,
          },
        },

        legend: {
          position: 'top',
          horizontalAlign: 'right',
          fontSize: '14px',
        },

        colors: ['#7C93BD', '#FA622F', '#BD76FF'],
        xaxis: {
          categories: [
            '7일 전',
            '6일 전',
            '5일 전',
            '4일 전',
            '2일 전',
            '1일 전',
          ],
        },
        yaxis: {
          min: 0,
          max: 5,
        },
      }}
    />
  );
};

export default FreshLineChart;
