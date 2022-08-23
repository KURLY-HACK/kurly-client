import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { IScoreState } from '../../lib/interface';
import { getCommonScoreThunk } from '../../store/slices/chart/getCommonScoreSlice';
import { getFreshScoreThunk } from '../../store/slices/chart/getFreshScoreSlice';
import { RootState, useAppDispatch, useAppSelector } from '../../store/store';

const ReviewLineChart = ({ id }: { id: string }) => {
  //dispatch할 때 id값 쿼리에 필요
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
    } else {
      dispatch(getCommonScoreThunk(id));
    }
  }, []);
  //별점 바로 렌더링되게 commonTotalScores는 바로 적용 근데 totalScores.가 적용이 안됨.

  function scores() {
    if (productType === 1) {
      return freshTotalScores?.map((score) => score['rate']);
    } else {
      return commonTotalScores?.map((score) => score['rate']);
    }
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

export default React.memo(ReviewLineChart);
