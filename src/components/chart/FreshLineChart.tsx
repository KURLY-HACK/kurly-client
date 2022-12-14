import React, { useEffect } from 'react';
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

  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: '신선도',
          data: freshScores.map(
            (score) => Math.round(score['rate'] * 100) / 100
          ),
        },
        {
          name: '맛',
          data: tasteScores.map(
            (score) => Math.round(score['rate'] * 100) / 100
          ),
        },
        {
          name: '배송상태',
          data: deliveryScores.map(
            (score) => Math.round(score['rate'] * 100) / 100
          ),
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
