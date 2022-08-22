import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { getFreshScoreThunk } from '../../store/slices/chart/getFreshScoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';

const FreshLineChart = ({ id }: { id: string }) => {
  //dispatch할 때 id값 쿼리에 필요

  const freshScores = useAppSelector(
    (state: RootState) => state.freshscore.fresh_score
  );
  const tasteScores = useAppSelector(
    (state: RootState) => state.freshscore.taste_score
  );
  const deliveryScores = useAppSelector(
    (state: RootState) => state.freshscore.delivery_score
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getFreshScoreThunk(id));
  }, []);

  // const freshScores = [
  //   { date: '4주 전', rate: 4.3 },
  //   { date: '3주 전', rate: 4.0 },
  //   { date: '2주 전', rate: 3.7 },
  //   { date: '1주 전', rate: 4.0 },
  // ];
  // const tasteScores = [
  //   { date: '4주 전', rate: 1 },
  //   { date: '3주 전', rate: 2 },
  //   { date: '2주 전', rate: 3 },
  //   { date: '1주 전', rate: 4 },
  // ];
  // const deliveryScores = [
  //   { date: '4주 전', rate: 4 },
  //   { date: '3주 전', rate: 3 },
  //   { date: '2주 전', rate: 2 },
  //   { date: '1주 전', rate: 1 },
  // ];

  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: '신선도',
          data: freshScores.map((score) => score['rate']),
        },
        {
          name: '맛',
          data: tasteScores.map((score) => score['rate']),
        },
        {
          name: '배송상태',
          data: deliveryScores.map((score) => score['rate']),
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
            fontWeight: 700,
          },
        },

        legend: {
          position: 'top',
          horizontalAlign: 'right',
          fontSize: '14px',
        },

        colors: ['#7C93BD', '#FA622F', '#BD76FF'],
        xaxis: {
          categories: ['4주 전', '3주 전', '2주 전', '1주 전'],
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
