import React, { useEffect } from 'react';
import ApexCharts from 'react-apexcharts';
import { getCommonScoreThunk } from '../../store/slices/chart/getCommonScoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';

const ReviewLineChart = ({ id }: { id: string }) => {
  //dispatch할 때 id값 쿼리에 필요
  const totalScores = useAppSelector(
    (state: RootState) => state.commonscore.rating
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCommonScoreThunk(id));
  }, []);
  // const totalScores = [
  //   { date: '2022-05-01', rate: 4.3 },
  //   { date: '2022-06-01', rate: 4.0 },
  //   { date: '2022-07-01', rate: 3.7 },
  //   { date: '2022-08-01', rate: 4.0 },
  // ];
  return (
    <ApexCharts
      type="line"
      series={[
        {
          name: '총점',
          data: totalScores.map((score) => score['rate']),
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
          categories: [
            '2022년 05월',
            '2022년 06월',
            '2022년 07월',
            '2022년 08월',
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

export default ReviewLineChart;
