import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import { getCommonScoreThunk } from '../../store/slices/chart/getCommonScoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';

const ReviewLineChart = ({ id }: { id: string }) => {
  //dispatch할 때 id값 쿼리에 필요

  const commonTotalScores = useAppSelector(
    (state: RootState) => state.commonscore.rating
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCommonScoreThunk(id));
  }, []);

  function scores() {
    return commonTotalScores?.map(
      (score) => Math.round(score['rate'] * 100) / 100
    );
  }

  function date() {
    return commonTotalScores?.map((score) => score['date'].slice(0, -3));
  }

  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: '총점',
          data: scores(),
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
            fontWeight: 700,
          },
        },
        colors: ['#522772'],
        xaxis: {
          categories: date(),
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
