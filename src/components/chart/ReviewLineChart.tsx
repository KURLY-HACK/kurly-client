import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { IScoreState } from '../../lib/interface';
import { getCommonScoreThunk } from '../../store/slices/chart/getCommonScoreSlice';
import { getFreshScoreThunk } from '../../store/slices/chart/getFreshScoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';

const ReviewLineChart = ({ id }: { id: string }) => {
  //dispatch할 때 id값 쿼리에 필요
  const [totalScores, setTotalScores] = useState<IScoreState[]>([]);

  const productType = useAppSelector(
    (state: RootState) => state.product.product.type
  );
  const commonTotalScores = useAppSelector(
    (state: RootState) => state.commonscore.rating
  );

  const freshTotalScores = useAppSelector(
    (state: RootState) => state.freshscore.rating
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (productType === 1) {
      dispatch(getFreshScoreThunk(id));
      setTotalScores(freshTotalScores);
    } else {
      dispatch(getCommonScoreThunk(id));
      setTotalScores(commonTotalScores);
    }
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
          data: totalScores?.map((score) => score['rate']),
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
